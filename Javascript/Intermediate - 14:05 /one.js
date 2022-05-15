"use strict";

const fs = require("fs");
const https = require("https");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

async function getNumTransactions(username) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
  // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>

  const options = {
    hostname: `https://jsonmock.hackerrank.com/api/article_users?username=${username}`,
    port: 443,
    path: "",
    method: "GET",
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
  console.log(req);
}
async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const username = readLine().trim();
  const result = await getNumTransactions(username);
  ws.write(result.toString());
}
getNumTransactions("epaga");
