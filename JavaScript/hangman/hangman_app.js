const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const statusEl = document.querySelector("#status");

const hangmanOne = new Hangman("cat", 3);

puzzleEl.textContent = hangmanOne.getPuzzle();
guessesEl.textContent = hangmanOne.allowedGuesses;
statusEl.textContent = hangmanOne.getStatus();


window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  hangmanOne.makeGuess(guess);
  hangmanOne.calculateStatus()
  puzzleEl.textContent = hangmanOne.getPuzzle();
  guessesEl.textContent = hangmanOne.allowedGuesses;
  statusEl.textContent = hangmanOne.getStatus();

});
