/*
1. This program controles the main loop
2. Tells the Menu to display and read the user input
3. Evaluates the user input and accesses connected functions / Objects
*/

// Import Section
const gameMenu = require("./gameMenu.js");
const gameHelp = require("./gameHelp.js");
const theGame = require("./theGame.js");
const comPlayer = require("./comPlayer.js");
const humanPlayer = require("./humanPlayer.js");
const readlineSync = require("readline-sync");

//Program Object Section - creating instances of classes
const sPlayerName = readlineSync.question("Please enter your name: "); // reading user name input
const menu = new gameMenu.CProgramMenu(sPlayerName); // passing user name input to the CProgramMenu class
const help = new gameHelp.CProgramHelp();
const theComPlayer = new comPlayer.CComPlayer();
const theHumanPlayer = new humanPlayer.CHumanPlayer(sPlayerName); // passing user name input to the CHumanPlayer sub class

//Program Control Variable
let bRun = true;

//main program loop
while (bRun) {
  // 1. Show main menu and read the choice from console
  let iChoice = menu.run();

  // 2. Evaluate menu choice
  switch (iChoice) {
    case gameMenu.menuValues.playerGuessing:
      {
        // 2.a start a game with the human player subclass passed as an argument to the CTheGame class
        const game = new theGame.CTheGame(theHumanPlayer, true);
        game.run();
      }
      break;

    case gameMenu.menuValues.comGuessing:
      {
        // 2.b. start a game with the computer player subclass passed as an argument to the CTheGame class
        const game = new theGame.CTheGame(theComPlayer, false);
        game.run();
      }
      break;

    case gameMenu.menuValues.showPlayerStatistics:
      // 2.c. Show human player statistics
      theHumanPlayer.showStatistics();
      break;

    case gameMenu.menuValues.showComStatistics:
      // 2.d. Show computer player statistics
      theComPlayer.showStatistics();
      break;

    case gameMenu.menuValues.showHelp:
      // 2.e. Show the game manual
      help.showHelp();
      break;

    case gameMenu.menuValues.quit:
      // exit the loop / quit programm
      bRun = false;
      break;
  }
}
