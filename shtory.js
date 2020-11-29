const recordSession = () => {
  const { spawnSync } = require("child_process");
  const SCRIPT_PATH = `${process.env.TMPDIR}/shtory_${Date.now()}`;
  console.log(`SCRIPT LOCATION = ${SCRIPT_PATH}`);
  const script = spawnSync("script", ["-q", SCRIPT_PATH], { stdio: "inherit" });
  if (script.stderr) {
    console.log(Error(spawn.stderr));
    process.exitCode = 1;
    return process.exitCode;
  }

};

const printUsage = (args) => {
  console.log(`${args[0]} ${args[1]} [-rlf]`);
};

if (require.main === module) {
  args = process.argv;
  switch (args[2]) {
    case "-r":
      recordSession();
      break;
    case "-l":
      // TODO: IMPLEMENT -l
      break;
    case "-f":
      // TODO: IMPLEMENT -f
      break;
    default:
      printUsage(args);
  }
}
