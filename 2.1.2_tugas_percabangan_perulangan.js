console.log("Bismillah");

// Config the interaktif CLI
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuest(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Login with static password
