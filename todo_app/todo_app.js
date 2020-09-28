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

const filters = {
  searchText: ""
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodo = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector("#todos").innerHTML = ""

  const summary = document.createElement("h4")
  summary.textContent = `You have ${incompleteTodo.length} todos left`
  document.querySelector("#todos").appendChild(summary)

  filteredTodos.forEach(function (todo) {
    const p = document.createElement("p")
    p.textContent = todo.text
    document.querySelector("#todos").appendChild(p)

  })
}

renderTodos(todos, filters)

// listen for todo text change
document.querySelector("#new-todo-text").addEventListener("input", function (e) {
  console.log(e.target.value)
})

// listen for new todo creation
document.querySelector("button#add-todo").addEventListener("click", function (e) {
  e.target.textContent = "Added Todo"
})

// listens for input text changes and changes filters
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})