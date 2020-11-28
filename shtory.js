args = process.argv

if (args[2] === '-r') {
    const { execSync, spawnSync } = require('child_process');
    const SCRIPT_PATH = "my_script" + Date.now()
    const script = spawnSync('script', ['-q', SCRIPT_PATH], { stdio: 'inherit' });
}

if (args[2] === '-l') {
    // TODO
}

if (args[2] === 'f') {
    let username = args[3]
    // TODO
}



