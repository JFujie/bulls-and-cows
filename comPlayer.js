const { CPlayerBase } = require("./gamePlayerBase");

//   ! ***************************************************************************************************************

class CComPlayer extends CPlayerBase {
  // the ComPlayer has always the same name, therefore no parameter name is required.
  constructor() {
    //calling the constructor of the super class (base class)
    super("Computer Player");
    this.iCurrAttempts = 0;
  }

  guess() {
    let sGuess;

    if (this.iCurrAttempts < 100) {
      sGuess = "";
      for (let i = 0; i < 4; i++) {
        let iNumber = Math.floor(Math.random() * 10);
        sGuess = sGuess + iNumber.toString();
      }
      this.iCurrAttempts++;
    } else {
      sGuess = "quit";
    }

    console.log("My Guess: " + sGuess);

    return sGuess;
  }

  //   ! ***************************************************************************************************************

  gameEnd(sSecretNumber, iAttempts) {
    // let base class do its work
    super.gameEnd(sSecretNumber, iAttempts);
    // resetting iCurrAttempts so multiple games can be played
    this.iCurrAttempts = 0;
  }
}

//   ! ***************************************************************************************************************

module.exports = {
  CComPlayer,
};
