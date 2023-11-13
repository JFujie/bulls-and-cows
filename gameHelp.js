const readlineSync = require("readline-sync");

//   ! ***************************************************************************************************************
class CProgramHelp {
  sHelpText =
    "Welcome to the Game Manual!\n" +
    "Rules:\n" +
    "One of the players comes up with a secret number, and the other player tries to guess it.\n" +
    "The secret number must consist of 4 digits and each digit must be unique.\n" +
    "After each guess, the player will get a hint to help them guess better next time around.\n" +
    "The hint tells the player how many bulls and how many cows there were.\n" +
    "What are bulls and cows?\n" +
    "If there are any matching digits and they are in their right positions, they are counted as bulls.\n" +
    "If in different positions, they are counted as cows.\n\n" +
    "You have unlimited attempts. But if you feel like quitting just type `quit` into the console.";

  //   ! ***************************************************************************************************************
  showHelp() {
    console.log(`\n${this.sHelpText}\n`);
    readlineSync.question("Press enter to continue...");
    console.log("\n");
  }
}

//   ! ***************************************************************************************************************

module.exports = {
  CProgramHelp,
};
