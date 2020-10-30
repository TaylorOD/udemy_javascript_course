const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const statusEl = document.querySelector("#status");

let hangmanOne

// puzzleEl.textContent = hangmanOne.puzzle;
// statusEl.textContent = hangmanOne.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode)

  hangmanOne.makeGuess(guess)
  hangmanOne.calculateStatus()
  render()
  
})

const render = () => {
  puzzleEl.textContent = hangmanOne.puzzle;
  statusEl.textContent = hangmanOne.statusMessage;
}

const startGame = async () => {
  const puzzle = await getPuzzle("2")
  hangmanOne = new Hangman(puzzle, 5)
  render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()


// getPuzzle("2").then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(error)
// })

// getLocation().then((location) => {
//   console.log(`You are located at ${location.city}, ${location.region} ${location.country}`)
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(country)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })