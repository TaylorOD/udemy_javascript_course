// Primitive value: string, number , boolean, null, undefined - everything not in this list is an object

// myObject -> Object.prototype -> null
// Array: myArray -> Array.prototype ->  Object.prototype -> null
// Function: myFunction -> Function.prototype -> Object.prototype -> null
// both arrays and functions are modified versions of objects
// string is not an object but it can use methods because it has an object wrapper. It gets converted to an object by javascript.
// This makes almost everything in javaScript an object but in reality string, number, and boolean are not but they act like them.
// String: myString -> String.prototype -> Object.prototype -> null
// Number: myNumber -> Number.prototype  -> Object.prototype -> null
// Boolean: myBoolean -> Boolean.prototype -> Object.prototype -> null

// 

// const hangmanOne = new Hangman("cat", 3)
// guess c, t, z
// hangmanOne.makeGuess("a")
// hangmanOne.makeGuess("t")
// hangmanOne.makeGuess("z")
// hangmanOne.makeGuess("s")


// const hangmanTwo = new Hangman("New Jersey", 8)
// hangmanTwo.makeGuess("w")
// console.log(hangmanTwo.getPuzzle())
// console.log(hangmanTwo.allowedGuesses)


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

// renderHangmanGames(hangmanOne.getPuzzle())
// renderHangmanGuesses(hangmanOne.allowedGuesses)
