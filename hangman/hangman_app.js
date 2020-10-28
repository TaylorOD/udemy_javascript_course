

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

getPuzzle("2").then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getLocation().then((location) => {
  console.log(`You are located at ${location.city}, ${location.region} ${location.country}`)
  return getCountry(location.country)
}).then((country) => {
  console.log(country)
}).catch((err) => {
  console.log(`Error: ${err}`)
})