const Hangman = function (word, allowedGuesses) {
  this.word = word.toLowerCase().split("")
  this.allowedGuesses = allowedGuesses
  this.guessedLetters = []
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



const hangmanOne = new Hangman("BOB", 3)
console.log(hangmanOne)
console.log(hangmanOne.getPuzzle())
const hangmanTwo = new Hangman("code dog", 8)
console.log(hangmanTwo)
console.log(hangmanTwo.getPuzzle())