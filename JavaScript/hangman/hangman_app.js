

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const statusEl = document.querySelector("#status");

const hangmanOne = new Hangman("cat dog", 3);

puzzleEl.textContent = hangmanOne.puzzle;
statusEl.textContent = hangmanOne.statusMessage;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);

  hangmanOne.makeGuess(guess);
  hangmanOne.calculateStatus()
  puzzleEl.textContent = hangmanOne.puzzle;
  statusEl.textContent = hangmanOne.statusMessage;

});

const request = new XMLHttpRequest()

request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText)
    console.log(data)
  }
})

request.open("GET", "http://puzzle.mead.io/puzzle")
request.send()