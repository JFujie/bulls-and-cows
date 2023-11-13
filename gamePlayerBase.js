/*
Base Specification:
1. has a name.
2. guessing method
3. method for receiving hint
4. storing the result at the game end
5. displaying the game results as statistics

public methods which are requiered and mandatory to the game
The extended class must override at least the guess() function.
*/

class CPlayerBase {
  constructor(name) {
    this.name = name;
    this.results = [];
  }

  //returns the guess as string of 4 digits
  //if the result returned is empty, the game should quit immediately.
  guess() {
    //must be implemented by the inherited class
    console.log("Sorry, as a player baseclass,  no guess is possible.");
    return ""; // means end the game
  }

  //   ! ***************************************************************************************************************

  //method for receiving hint and messages and shows them on the console
  hint(iBulls, iCows, sMessage) {
    console.log("\nHint:");
    console.log(`${iBulls} Bulls , ${iCows} Cows `);
    console.log(`${sMessage}\n`);
  }

  //   ! ***************************************************************************************************************

  gameEnd(sSecretNumber, iAttempts, sMessage) {
    const result = `Secret number: ${sSecretNumber}, Attempts: ${iAttempts} - ${sMessage}`;
    this.results.push(result);
  }

  //   ! ***************************************************************************************************************

  showStatistics() {
    const gamesPlayed = this.results.length;
    console.log(`${this.name}'s game statistics: `);
    console.log(`Games played: ${gamesPlayed}\n`);
    for (let i = 0; i < this.results.length; i++) {
      console.log(`${i + 1}. ${this.results[i]}`);
    }
  }
}

//   ! ***************************************************************************************************************

module.exports = {
  CPlayerBase,
};
