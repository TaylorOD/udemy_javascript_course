// let num = 103.1

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// let min = 0
// let max = 20
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// // 0 - 10
// console.log(randomNum)

// create function that takes in guess
// true if guess correct and false is not correct
// 1 - 5 guess

let makeGuess = function (guess) {
  let min = 0
  let max = 5
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  if (guess === randomNum) {
    return true
  } else {
    return false
  }
}
console.log(makeGuess(1))