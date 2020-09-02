// multiple arguments

let add = function (a, b, c) {
  return a + b + c


}

let result = add(10, 20, 100)
console.log(result)


// default arguments

let getScoreText = function (name = "Anonymous", score = 0) {
  console.log(name)
  console.log(score)

}

getScoreText()