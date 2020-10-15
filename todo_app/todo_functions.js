/* global todos, filters */

// read existing notes from localstorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos")

  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// save todos to local storage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

// remove Todo using X button
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// change if todo completed or not using checkbox
const toggleCompleted = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
}

// Generate DOM Elements for todos
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("div")
  const textEl = document.createElement("span")
  const removeButton = document.createElement("button")
  const checkbox = document.createElement("input")

  // create checkbox for each
  checkbox.setAttribute("type", "checkbox")
  checkbox.checked = todo.completed
  todoEl.appendChild(checkbox)
  checkbox.addEventListener("change", () => {
    toggleCompleted(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })


  // set todo text
  textEl.textContent = todo.text
  todoEl.appendChild(textEl)

  // create x/remove button for each todo
  removeButton.textContent = "x"
  todoEl.appendChild(removeButton)
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// Render application todos
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  // return incompleted todos
  const incompleteTodo = filteredTodos.filter((todo) => !todo.completed)

  document.querySelector("#todos").innerHTML = ""
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodo))

  filteredTodos.forEach((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo))
  })
}

// generate summary
const generateSummaryDOM = (incompleteTodo) => {
  const summary = document.createElement("h4")
  summary.textContent = `You have ${incompleteTodo.length} todos left`
  return summary
}