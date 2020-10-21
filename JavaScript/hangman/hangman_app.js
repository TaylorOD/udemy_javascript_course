const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")

const hangmanOne = new Hangman("cat", 3)

puzzleEl.textContent = hangmanOne.getPuzzle()
guessesEl.textContent = hangmanOne.allowedGuesses

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode)
  hangmanOne.makeGuess(guess)
  puzzleEl.textContent = hangmanOne.getPuzzle()
  guessesEl.textContent = hangmanOne.allowedGuesses
})
