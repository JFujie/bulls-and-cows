const { CPlayerBase } = require("./gamePlayerBase");
const readlineSync = require("readline-sync");

//   ! ***************************************************************************************************************

class CHumanPlayer extends CPlayerBase {
  // Human Player will get name from Input therefore needs name parameter
  constructor(sName) {
    super(sName);
  }

  guess() {
    let sGuess = readlineSync.question("Please enter your guess: ");
    return sGuess;
  }
}

//   ! ***************************************************************************************************************

module.exports = {
  CHumanPlayer,
};
