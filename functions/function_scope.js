let fahrenheitToCelsius = function (num) {
  let result = (num - 32) / 1.8

  if (result <= 0) {
    let isFreezing = true
  }
  return result
}

let temp = fahrenheitToCelsius(32)
let otherTemp = fahrenheitToCelsius(68)

console.log(temp)
console.log(otherTemp)