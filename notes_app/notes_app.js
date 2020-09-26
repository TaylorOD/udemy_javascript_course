
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

document.querySelector("button").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked"
})
