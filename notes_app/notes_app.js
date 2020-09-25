
const notes = [{
  title: "My next Trip",
  body: "I would like to go to Spain"

}, {
  title: "Coding projects",
  body: "JavaScript and Ruby"

}, {
  title: "Buy new watch",
  body: "Gold"

}]

// DOM

// const p = document.querySelector("p")
// p.remove()

const ps = document.querySelectorAll("p")

ps.forEach(function (p) {
  p.textContent = " ****** "
  // console.log(p.textContent)
  // p.remove()
})

// Add a new element (h1, p), then update content (give it a text value), put it somewhere in the app

const newParagraph = document.createElement("p")
newParagraph.textContent = "This is a new element from JavaScript"
document.querySelector("body").appendChild(newParagraph)

