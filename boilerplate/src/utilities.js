console.log("utilities.js")

const addNumbers = (a, b) => a + b

const name = (input) => console.log(input)

const square = (x) => x * x
console.log("from my code")

export { name, addNumbers, square as default }