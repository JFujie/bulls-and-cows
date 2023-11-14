/*
1. handles core game logic
2. handles generating unique random number, evaluating guesses and running game loop
3. receives player instance as parameter
*/

const readlineSync = require("readline-sync");

class CTheGame {
  //player must be an object of class gamePlayerBase or its extended class.
  constructor(player, bAutoGenerateSecretNumber) {
    this.currPlayer = player;
    this.bAutoGenerateSecretNumber = bAutoGenerateSecretNumber;
  }

  generateUniqueRandomNumber() {
    const digits = Array.from({ length: 10 }, (_, i) => i); // makes Array of digits 0 to 9
    let randomNumber = "";

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      const randomDigit = digits.splice(randomIndex, 1)[0];
      randomNumber += randomDigit.toString();
    }

    return randomNumber;
  }

  // validates sGuess against sNumberToGuess, thus counting iBulls and iCows
  // sGuess is valid if iBulls = 4
  // sets appropriate sMessage
  // returns true, if sGuess is valid.
  evaluateGuess(sNumberToGuess, sGuess) {
    const sNotOkMessage = "Guess hasn't been correct yet.";
    const sOkMessage = "Congratulations, you won";
    let bKeepGuessing = true;
    let iBulls = 0;
    let iCows = 0;
    let sMessage = "";

    //special case for stop guessing request
    if (sGuess.length === 0) {
      sMessage = "Player quit the game :( Better luck next time!";
      bKeepGuessing = false;
      return { bKeepGuessing, iBulls, iCows, sMessage };
    }

    for (let i = 0; i < 4; i++) {
      if (sGuess[i] === sNumberToGuess[i]) {
        iBulls++;
      } else if (sNumberToGuess.includes(sGuess[i])) {
        iCows++;
      }
    }

    if (iBulls === 4) {
      bKeepGuessing = false;
      sMessage = sOkMessage;
    } else {
      sMessage = sNotOkMessage;
    }

    return { bKeepGuessing, iBulls, iCows, sMessage };
  }

  //2. every character must be a number between 0 - 9
  //3. every number must be unqiue within the input.
  isEachCharNumericAndUnique(sStr) {
    // check if sStr only consists of number between 0 and 9 with Regular Expression.
    if (/^[0-9]+$/.test(sStr)) {
      // check if each char is unique within the string
      for (let i = 0; i < sStr.length - 1; i++) {
        let num = sStr[i];
        for (let j = i + 1; j < sStr.length; j++) {
          if (num === sStr[j]) {
            console.log("Error: The number must be unique.");
            return false;
          }
        } // for j
      } // for i
    } // if test
    else {
      console.log("Error: The input must be 4 digits between 0 and 9.");
      return false;
    }
    return true;
  }

  //ask guess from player and validate sGuess
  //1. must be 4 characters
  //2. every character must be a number between 0 - 9
  //3. every number must be unqiue within the input.
  getValidGuessInput() {
    let sGuess = "";
    let bKeepAsking = true;
    while (bKeepAsking) {
      sGuess = this.currPlayer.guess();
      // special case when player wants to quit the game immediatly
      if (sGuess.toLocaleLowerCase() === "quit") return "";

      if (sGuess.length === 4) {
        bKeepAsking = this.isEachCharNumericAndUnique(sGuess) ? false : true;
      } else {
        console.log("Error: The input must be 4 digits.");
      }
    }
    return sGuess;
  }

  getHumanSecretNumber() {
    let bKeepAsking = true;
    let humanSecretNumber;
    while (bKeepAsking) {
      humanSecretNumber = readlineSync.question("Enter the number to guess: ");
      if (humanSecretNumber.length === 4) {
        bKeepAsking = this.isEachCharNumericAndUnique(humanSecretNumber)
          ? false
          : true;
      } else {
        console.log("Error: The input must be 4 digits.");
      }
    }
    return humanSecretNumber;
  }

  //Runs the game loop
  run() {
    let bKeepGuessing = true; // Flag to control the game loop
    let iAttempts = 0; // Number of attempts made by the player
    let sNumberToGuess; // The secret number to be guessed

    // Determine whether to auto-generate the secret number or get it from a human player
    this.bAutoGenerateSecretNumber === true
      ? (sNumberToGuess = this.generateUniqueRandomNumber())
      : (sNumberToGuess = this.getHumanSecretNumber());

    // Start the game loop
    while (bKeepGuessing) {
      iAttempts++;

      let sGuess = this.getValidGuessInput();

      let result = this.evaluateGuess(sNumberToGuess, sGuess);

      bKeepGuessing = result.bKeepGuessing;
      this.currPlayer.hint(result.iBulls, result.iCows, result.sMessage);
      if (bKeepGuessing === false) {
        this.currPlayer.gameEnd(sNumberToGuess, iAttempts, result.sMessage);
      }
    }
  }
}

module.exports = {
  CTheGame,
};
