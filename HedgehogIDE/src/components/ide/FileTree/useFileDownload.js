// @flow

import * as React from 'react';

import * as hooks from '../../misc/hooks';

// this type has all properties that are generated by mountLink()
type MountedLinkProps = {|
  ref: RefObject<'a'>,
  href: string | void,
  download: string | void,
  style: { ... },
  'aria-hidden': boolean,
|};

type FileDownloadHook = {|
  show(name: string, content: string): void,
  mountLink(): MountedLinkProps,
|};

type Config = {|
  name: string,
  objectURL: string,
|};

export default function useFileDownload(): FileDownloadHook {
  const [config, setConfig] = React.useState<Config | null>(null);
  const linkRef = hooks.useElementRef<'a'>();

  // after setting the config, show the download window
  // whenever the config is changed, revoke the old objectURL
  React.useEffect(() => {
    if (config === null) return undefined;

    // eslint-disable-next-line no-throw-literal
    if (linkRef.current === null) throw 'ref is null';

    // by the time the effect is called, it should have the current objectURL
    // eslint-disable-next-line no-throw-literal
    if (linkRef.current.href !== config.objectURL) throw 'unreachable';

    linkRef.current.click();

    return () => {
      URL.revokeObjectURL(config.objectURL);
    };
  }, [config, linkRef]);

  function show(name: string, content: string) {
    const objectURL = URL.createObjectURL(new Blob([content]));
    setConfig({ name, objectURL });
  }

  return {
    show,
    mountLink() {
      return {
        ref: linkRef,
        href: config?.objectURL,
        download: config?.name,
        style: { display: 'none' },
        'aria-hidden': true,
      };
    },
  };
}
