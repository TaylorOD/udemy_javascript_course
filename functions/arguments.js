// multiple arguments

// let add = function (a, b, c) {
//   return a + b + c


// }

// let result = add(10, 20, 100)
// console.log(result)


// default arguments

let getScoreText = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " - Score: " + score
}

let scoreText = getScoreText("Taylor")
console.log(scoreText)