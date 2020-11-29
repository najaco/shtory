const serverURL = "localhost:8080";

async function postStory(data = {}) {
  const response = await fetch(`${serverURL}/story`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

const recordSession = () => {
  const { spawnSync } = require("child_process");
  const SCRIPT_PATH = `${process.env.TMPDIR}/shtory_${Date.now()}`;
  // console.log(`SCRIPT LOCATION = ${SCRIPT_PATH}`);
  const script = spawnSync("script", ["-q", SCRIPT_PATH], { stdio: "inherit" });
  if (script.stderr) {
    console.log(Error(spawn.stderr));
    process.exitCode = 1;
    return process.exitCode;
  }

  const fs = require("fs");
  const data = fs.readFileSync(SCRIPT_PATH);
  console.log(data.toString('utf-8'))
  postStory({ user_id: 0, text: data, token: "" }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
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
