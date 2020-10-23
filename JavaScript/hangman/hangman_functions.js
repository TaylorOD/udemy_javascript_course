class Hangman { 
  constructor(word, allowedGuesses) {
    this.word = word.toLowerCase().split("");
    this.allowedGuesses = allowedGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  getPuzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;

      } else {
        puzzle += "*";

      }
    });
    return puzzle;
  }
  makeGuess(guess) {
    if (this.status === "playing") {
      guess = guess.toLowerCase();
      const isUnique = !this.guessedLetters.includes(guess);
      const isBadGuess = !this.word.includes(guess);
  
      if (isUnique) {
        this.guessedLetters.push(guess);
  
      }  
      if (isUnique && isBadGuess) {
        this.allowedGuesses -= 1;
      }
      this.getStatus;
    }
  }
  calculateStatus() {
    let finished = true;

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter)) {
          
      } else {
        finished = false;
      }
    });
        
    if (this.allowedGuesses <= 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }

    return this.status;
  }
  set status(value) {
    if (value === "playing") {
      this._status = `Playing: You have ${this.allowedGuesses} guesses remaining.`
    } else if (value === "failed") {
      this._status = `Failed: Nice try! The word was "${this.word.join("")}".`
    } else if (value === "finished") {
      this._status = "Finished: Great job! You guessed the word."
    }
  }
  get status() {
    return this._status
  }
}