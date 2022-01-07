"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  // Write your code here
  let Xmas95 = new Date(dateString);
  let weekday = Xmas95.getDay();
  if (weekday == 0) {
    dayName = "Sunday";
  } else if (weekday == 1) {
    dayName = "Monday";
  } else if (weekday == 2) {
    dayName = "Tuesday";
  } else if (weekday == 3) {
    dayName = "Wednesday";
  } else if (weekday == 4) {
    dayName = "Thursday";
  } else if (weekday == 5) {
    dayName = "Fryday";
  } else if (weekday == 6) {
    dayName = "Saturday";
  }

  return dayName;
}
