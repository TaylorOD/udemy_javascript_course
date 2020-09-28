
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

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked"
})

document.querySelector("#remove-all").addEventListener("click", function () {
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove()
  })
})

document.querySelector("#search-text").addEventListener("input", function (e) {
  console.log(e.target.value)

})