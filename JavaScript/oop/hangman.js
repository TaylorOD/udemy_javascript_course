const Hangman = function (word, missedGuesses) {
  this.word = word
  this.missedGuesses = missedGuesses
}

const hangmanOne = new Hangman("cat", 3)
console.log(hangmanOne)
const hangmanTwo = new Hangman("code", 7)
console.log(hangmanTwo)