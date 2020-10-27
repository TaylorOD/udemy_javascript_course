


let tempConvert = function (farenheit) {

  return {
    farenheit: farenheit,
    celsius: (farenheit - 32) / 1.8,
    kelvin: ((farenheit - 32) / 1.8) + 273.15
  }
}

let currentTemp = tempConvert(75)

console.log(currentTemp)