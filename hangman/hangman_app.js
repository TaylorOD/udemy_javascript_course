

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const statusEl = document.querySelector("#status");

const hangmanOne = new Hangman("cat dog", 3);

puzzleEl.textContent = hangmanOne.puzzle;
statusEl.textContent = hangmanOne.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);

  hangmanOne.makeGuess(guess);
  hangmanOne.calculateStatus()
  puzzleEl.textContent = hangmanOne.puzzle;
  statusEl.textContent = hangmanOne.statusMessage;

});

getPuzzle("2", (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

getCountry("US", (error, country) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(`Country name: ${country}`)
  }
})