const fs = require("fs");

/**
 * this function notifies about the current state of the process
 */
const watcher = async () => {
  const fileData = await fs.readFileSync("./../../status.txt", "utf-8");
  return fileData;
};

module.exports = { watcher };
