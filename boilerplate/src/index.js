// import "./utilities.js"
// only one default export, as many named exports as youd like

import square, { addNumbers, name } from "./utilities"

import scream from "./scream"

console.log("index.js")

console.log(addNumbers(31, 1))

console.log(scream("blah"))

console.log(square(5))