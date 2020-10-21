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
  this.getStatus
}

Hangman.prototype.getStatus = function () {
  let status = this.status
  let finished = true

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter)) {
      
    } else {
      finished = false
    }
  })
    
  if (this.allowedGuesses <= 0) {
    status = "failed"
  } else if (finished) {
    status = "finished"
  } else {
    status = "playing"
  }

  return status
}