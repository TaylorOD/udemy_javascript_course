const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const statusEl = document.querySelector("#status");

let hangmanGame

// puzzleEl.textContent = hangmanGame.puzzle;
// statusEl.textContent = hangmanGame.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode)

  hangmanGame.makeGuess(guess)
  hangmanGame.calculateStatus()
  render()
  
})

const render = () => {
  // puzzleEl.textContent = hangmanGame.puzzle;
  puzzleEl.innerHTML = ""
  statusEl.textContent = hangmanGame.statusMessage;

  hangmanGame.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span")
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })

}

const startGame = async () => {
  const puzzle = await getPuzzle("2")
  hangmanGame = new Hangman(puzzle, 5)
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