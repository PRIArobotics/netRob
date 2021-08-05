// @flow

import * as React from 'react';
import { defineMessages, FormattedMessage as M } from 'react-intl';

import SimpleDialog from '../../misc/SimpleDialog';

import { Project } from '../../../core/store/projects';

const messages = defineMessages({
  title: {
    id: 'app.exercises.create_exercise_dialog.title',
    description: 'Title for the exercise creation dialog',
    defaultMessage: 'Create new exercise',
  },
  description: {
    id: 'app.exercises.create_exercise_dialog.description',
    description: 'Text for the exercise creation dialog',
    defaultMessage: 'Do you want to upload project "{name}" as an exercise?',
  },
});

type SimpleDialogProps = React.ElementProps<typeof SimpleDialog>;

// this type has all properties that are generated by mountSimpleDialog()
type MountedSimpleDialogProps = $Diff<
  SimpleDialogProps,
  // these are the ones that aren't
  {|
    id: $PropertyType<SimpleDialogProps, 'id'>,
  |},
>;

type ShareProjectDialogHook = {|
  show(localProject: Project): void,
  mountSimpleDialog(): MountedSimpleDialogProps,
|};

type Config = {|
  localProject: Project,
|};

export default function useShareProjectDialog(
  onCreate: (Project) => boolean | Promise<boolean>,
): ShareProjectDialogHook {
  const [open, setOpen] = React.useState<boolean>(false);
  const [config, setConfig] = React.useState<Config | null>(null);

  function show(localProject: Project) {
    setOpen(true);
    setConfig({ localProject });
  }

  function onCancel() {
    setOpen(false);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown';
    // eslint-disable-next-line no-throw-literal
    if (config === null) throw 'unreachable';

    const { localProject } = config;

    const success = await onCreate(localProject);
    if (success) {
      setOpen(false);
    }
  }

  const name = config?.localProject.name ?? '';

  return {
    show,
    mountSimpleDialog() {
      return {
        open,
        valid: true,
        title: <M {...messages.title} />,
        description: <M {...messages.description} values={{ name }} />,
        actions: 'OK_CANCEL',
        onCancel,
        onConfirm,
      };
    },
  };
}
