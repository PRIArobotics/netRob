import WSAdapter from "./src/WSAdapter.mjs";

async function run(){
    const configPath = process.argv[2];
    const ws = new WSAdapter(configPath)
    await ws.startAll()
}

run()