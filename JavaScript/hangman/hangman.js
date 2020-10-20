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



const hangmanOne = new Hangman("cat", 3)
// guess c, t, z
hangmanOne.makeGuess("a")
hangmanOne.makeGuess("t")
hangmanOne.makeGuess("z")
hangmanOne.makeGuess("s")
console.log(hangmanOne.getPuzzle()) //c*t
console.log(hangmanOne.allowedGuesses)
// print remaining guesses (should be 1)
const hangmanTwo = new Hangman("New Jersey", 8)
hangmanTwo.makeGuess("w")
console.log(hangmanTwo.getPuzzle())
console.log(hangmanTwo.allowedGuesses)
// guess w
// console.log(hangmanTwo.getPuzzle()) **w *****

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode)
  hangmanTwo.makeGuess(guess)
  console.log(hangmanTwo.getPuzzle())
  console.log(hangmanTwo.allowedGuesses)
})