"use strict"

let todos = getSavedTodos()

const filters = {
  searchText: "",
  hideCompleted: false
}

renderTodos(todos, filters)

// listens for input text changes and changes filters
document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

// add new todo - listens to sub box
document.querySelector("#new-todo-text-form").addEventListener("submit", (e) => {
  e.preventDefault()
  if (e.target.elements.text.value.length > 0) {
    todos.push({
      id: uuidv4(),
      text: e.target.elements.text.value.trim(),
      completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ""
  } else {
    console.log("todo must have content")
  }
})

// listens to checkbox - true or false
document.querySelector("#completed-checkbox").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})