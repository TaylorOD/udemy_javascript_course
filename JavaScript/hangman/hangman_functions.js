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

// generate DOM for a Hangman puzzle
const generateHangmanDom = (puzzle) => {
  const puzzleEl = document.createElement("div")
  const guessesEl = document.createElement("a")

  // setup the hangman puzzle and guesses remaining text
  puzzleEl.textContent = puzzle

  puzzleEl.appendChild(guessesEl)

  return puzzleEl

}

// generate DOM for a guesses
const generateGuessesDom = (guesses) => {
  const guessesEl = document.createElement("a")
  const puzzleEl = document.createElement("div")


  // setup the hangman puzzle and guesses remaining text
  guessesEl.textContent = guesses

  guessesEl.appendChild(puzzleEl)

  return guessesEl

}


// renderHangman puzzle
const renderHangmanGames = (puzzle) => {

  document.querySelector("#puzzle").innerHTML = ""

  const puzzleEl = generateHangmanDom(puzzle)

  document.querySelector("#puzzle").appendChild(puzzleEl)

}

// renderHangman puzzle
const renderHangmanGuesses = (guesses) => {

  document.querySelector("#guesses").innerHTML = ""

  const guessesEl = generateHangmanDom(guesses)

  document.querySelector("#guesses").appendChild(guessesEl)

}