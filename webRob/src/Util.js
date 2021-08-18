export function loadScript(url)
{
    return new Promise(function(resolve, reject)
    {
        let newScript = document.createElement("script");
        newScript.onerror = reject;
        newScript.onload = resolve;
        document.head.children[0].insertBefore(newScript, document.currentScript);
        newScript.src = url;
    });
}

export function splitPath(path){
    const lastSlash = path.lastIndexOf("/");
    const dirname = path.substring(0, lastSlash);
    const basename = path.substring(lastSlash+1);

    const dot = basename.indexOf(".");
    const filename = basename.substring(0, dot);
    const suffix = basename.substring(dot+1);

    return {dirname: dirname, filename: filename, suffix: suffix}
}
