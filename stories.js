const { execSync, spawnSync } = require('child_process');
const SCRIPT_PATH = "my_script" + Date.now()
// const script = execSync('script', ['-q', SCRIPT_PATH]);
const script = spawnSync('script', ['-q', SCRIPT_PATH], {stdio: 'inherit'});


// e