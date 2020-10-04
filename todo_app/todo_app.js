let todos = getSavedTodos()

const filters = {
  searchText: "",
  hideCompleted: false
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
    text: e.target.elements.text.value,
    completed: false
  })
  saveTodos(todos)
  renderTodos(todos, filters)
  e.target.elements.text.value = ""
})

// listens to checkbox - true or false
document.querySelector("#completed-checkbox").addEventListener("change", function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})