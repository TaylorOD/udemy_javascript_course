const todos = [{
  text: "Practice JavaScript",
  completed: true

}, {
  text: "Update Resume",
  completed: true

}, {
  text: "Finish Blog",
  completed: false

}, {
  text: "Wrtie Write Up",
  completed: false

}, {
  text: "Send Invoice",
  completed: true

}]

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)


// const p = document.querySelectorAll("p")

// p.forEach(function (parapraph) {
//   if (parapraph.textContent.includes("the"))
//     parapraph.remove()
// })

// Add a new element (h1, p), then update content (give it a text value), put it somewhere in the app

todos.filter(function (todo) {
  const p = document.createElement("p")
  p.textContent = todo.text
  document.querySelector("body").appendChild(p)
})


const incompleteTodo = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement("h4")
summary.textContent = `You have ${incompleteTodo.length} todos left`
document.querySelector("body").appendChild(summary)


document.querySelector("button").addEventListener("click", function (e) {
  e.target.textContent = "Added Todo"
})