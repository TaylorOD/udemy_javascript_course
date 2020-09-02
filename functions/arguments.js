// multiple arguments

// let add = function (a, b, c) {
//   return a + b + c


// }

// let result = add(10, 20, 100)
// console.log(result)


// default arguments

// let getScoreText = function (name = "Anonymous", score = 0) {
//   return "Name: " + name + " - Score: " + score
// }

// let scoreText = getScoreText(undefined, 99)
// console.log(scoreText)

// Challegne area
// total for bill, tipPercent .5 .1 or .2 tip (5%, 10%, or 20%)


let bill = function (total = 0, tip = total * .1) {
  return "The total cost is " + total + " and you should tip " + tip + "."
}

let tipAmmounts = bill(595,)
console.log(tipAmmounts)