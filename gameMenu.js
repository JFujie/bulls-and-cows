/*
This object displays the menu and reads the user input from the console
*/
const readlineSync = require("readline-sync");

//enumeration values
const menuValues = {
  playerGuessing: 1,
  comGuessing: 2,
  showPlayerStatistics: 3,
  showComStatistics: 4,
  showHelp: 5,
  quit: 6,
};

class CProgramMenu {
  constructor(sPlayerName) {
    this.sPlayerName = sPlayerName;
  }

  displayMenu() {
    console.log(
      `\nWelcome to Bulls and Cows ${this.sPlayerName} ! Enter the number of the mode you want to select.\n`
    );
    console.log("1. Player guesses number");
    console.log("2. Computer guesses number");
    console.log("3. Show your statistics");
    console.log("4. Show computer statistics");
    console.log("5. How to play");
    console.log("6. Close Application");
  }

  run() {
    let bInputOk = false;
    let iChoice = 0;

    do {
      // display menu text
      this.displayMenu();

      // read a string input from the console and convert it to integer
      iChoice = parseInt(readlineSync.question("\nEnter your choice: "), 10);

      // validate the user input
      if (iChoice >= menuValues.playerGuessing && iChoice <= menuValues.quit) {
        bInputOk = true;
      } else {
        console.log(
          "\nWrong input, please enter a single digit to select a mode."
        );
      }

      console.log("\n\n");
    } while (!bInputOk);

    return iChoice;
  }
}

module.exports = {
  menuValues,
  CProgramMenu,
};
