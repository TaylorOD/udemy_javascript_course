


let tempConvert = function (temp) {
  let farenheit = temp
  let celsius = (farenheit - 32) / 1.8
  let kelvin = celsius + 273.15
  return {
    farenheit,
    celsius,
    kelvin
  }
}

let currentTemp = tempConvert(75)

console.log(currentTemp)