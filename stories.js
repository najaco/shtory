const { spawn } = require('child_process');
const SCRIPT_PATH = "./my_script" + Date.now()
const script = spawn('script', ['-q', ]);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});