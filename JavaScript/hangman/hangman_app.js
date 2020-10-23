const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const statusEl = document.querySelector("#status");

const hangmanOne = new Hangman("cat", 3);

puzzleEl.textContent = hangmanOne.getPuzzle();
statusEl.textContent = hangmanOne.getStatus();

// puzzleEl.textContent = hangmanOne.puzzle
// statusEl.textContent = hangmanOne.status

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  hangmanOne.makeGuess(guess);
  hangmanOne.calculateStatus()
  puzzleEl.textContent = hangmanOne.getPuzzle();
  statusEl.textContent = hangmanOne.getStatus();

});
