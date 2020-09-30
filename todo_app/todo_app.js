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
  searchText: "",
  hideCompleted: false
}


const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompleted = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompleted
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

// listens for input text changes and changes filters
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

// add new todo - listens to sub box
document.querySelector("#new-todo-text-form").addEventListener("submit", function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.newTodoText.value,
    completed: false
  })
  renderTodos(todos, filters)
  e.target.elements.newTodoText.value = ""
})

// listens to checkbox - true or false
document.querySelector("#completed-checkbox").addEventListener("change", function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})