console.log("Bismillah");

import { log } from "console";
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

const password = "123456";
let orders = [];

async function login() {
  let userPassword = await askQuest("Enter your password: ");

  if (userPassword === password) {
    console.log("Login Succesfully!\n");
    showMenu();
  } else {
    console.log("Login Failure...");
    rl.close();
  }
}

// Handle showMenu function

async function showMenu() {
  console.log("===== MAIN MENU =====");
  console.log("1. Create new order");
  console.log("2. Read all order");
  console.log("3. Update the order");
  console.log("4. Delete the order");
  console.log("5. Quit");
  console.log("=========CRUD'Q=========");

  const choice = await askQuest("Your choice: ");
  handleMenu(choice);
}

// Handle handleMenu function

async function handleMenu(choice) {
  switch (choice) {
    // Logic for first choice
    case "1":
      break;
    // Logic for second choice
    case "1":
      break;
    // Logic for third choice
    case "1":
      break;
    // Logic for fourth choice
    case "1":
      break;
    // Logic for fifth choice
    case "5":
      console.log("\n\nExit from app...");
      rl.close();
      break;

    default:
      console.log("Command not found...");
      showMenu();
      break;
  }
}

login();
