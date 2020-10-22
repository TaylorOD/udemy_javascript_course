const Hangman = function (word, allowedGuesses) {
  this.word = word.toLowerCase().split("");
  this.allowedGuesses = allowedGuesses;
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;

    } else {
      puzzle += "*";

    }
  });
  return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
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
};

Hangman.prototype.calculateStatus = function () {
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
};

Hangman.prototype.getStatus = function () {
  if (this.status === "playing") {
    return `Playing: Guesses left: ${this.allowedGuesses}`
  } else if (this.status === "failed") {
    return `Failed: Nice try! The word was "${this.word.join("")}".`
  } else if (this.status === "finished") {
    return "Finished: Great job! You guessed the word."
  }
}
