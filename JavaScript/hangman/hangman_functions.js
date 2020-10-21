const Hangman = function (word, allowedGuesses) {
  this.word = word.toLowerCase().split("")
  this.allowedGuesses = allowedGuesses
  this.guessedLetters = []
  this.status = "playing"
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ""
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter

    } else {
      puzzle += "*"

    }
  })
  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUnique) {
    this.guessedLetters.push(guess)

  }  
  if (isUnique && isBadGuess) {
    this.allowedGuesses -= 1
  }
}

Hangman.prototype.getStatus = function () {
  let status = this.status

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      status = "finished"
    } else if (this.allowedGuesses <= 0) {
      status = "failed"
    } 
  })
  return status
}