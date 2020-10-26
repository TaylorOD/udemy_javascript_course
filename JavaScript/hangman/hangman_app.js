

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

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

// const countryCode = "US"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const countryData = JSON.parse(e.target.responseText)

//     countryData.forEach((country) => {
//       if (country.alpha2Code === countryCode) {
//         console.log(country.name)
//       } 
//     })
//   } else if (e.target.readyState === 4) {
//     console.log("An error has taken place.")
//   }
// })

// countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
// countryRequest.send()