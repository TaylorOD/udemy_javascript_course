// const myAge = 27
// const message = myAge >= 18 ? "You can vote!" : "You cannot vote!"


// if (myAge >= 18) {
//   message = "you can vote!"
// } else {
//   message = "You cannot vote!"
// }

// console.log(message)


const myAge = 27
const showPage = () => {
  return "Showing the page"
}
const showErrorPage = () => {
  return "Showing the error page"
}

console.log(myAge >= 21 ? showPage() : showErrorPage())


const team = ["Tyler", "Porter", "Bobby", "sarah"]
console.log(team.length <= 4 ? `Team size: ${team.length}` : "Too many people on your team")
const teamSizeGood = () => {
  console.log(`Team size: ${team.length}`)
}
const teamSizeBad = () => {
  console.log("Too many people on your team.")
}


team.length <= 4 ? teamSizeGood() : teamSizeBad()