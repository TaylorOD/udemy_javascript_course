

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

getCountry("US").then((country) => {
  console.log(country)
}).catch((err) => {
  console.log(`Error: ${err}`)
})


// fetch("http://puzzle.mead.io/puzzle", {}).then((response) => {
//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error("Unable to fetch the puzzle")
//   }
// }).then((data) => {
//   console.log(data.puzzle)
// }).catch((error) => {
//   console.log(error)
// })