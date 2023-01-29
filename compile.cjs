const path = require("path");
const fs = require("fs");
const solc = require("solc");
const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const sourse = fs.readFileSync(lotteryPath, "utf8");

module.exports = solc.compile(sourse, 1).contracts[":Lottery"];

// console.log(solc.compile(sourse, 1).contracts[":Lottery"]);
