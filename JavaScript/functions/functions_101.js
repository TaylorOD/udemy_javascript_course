let greetUser = function () {
  console.log("Welcome user!")
}

greetUser()

let square = function (num) {
  let result = num * num
  return result
}


let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

let fahrenheitToCelsius = function (num) {
  let result = (num - 32) / 1.8
  return result
}

let temp = fahrenheitToCelsius(32)
let otherTemp = fahrenheitToCelsius(68)

console.log(temp)
console.log(otherTemp)