/* global todos, filters */

// read existing notes from localstorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos")

  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// save todos to local storage
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos))
}

// remove Todo using X button
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
  })

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// change if todo completed or not using checkbox
const toggleCompleted = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id
  })

  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
}

// Generate DOM Elements for todos
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement("div")
  const textEl = document.createElement("span")
  const removeButton = document.createElement("button")
  const checkbox = document.createElement("input")

  // create checkbox for each
  checkbox.setAttribute("type", "checkbox")
  checkbox.checked = todo.completed
  todoEl.appendChild(checkbox)
  checkbox.addEventListener("change", function () {
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
  removeButton.addEventListener("click", function () {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// Render application todos
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  // return incompleted todos
  const incompleteTodo = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector("#todos").innerHTML = ""
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodo))

  filteredTodos.forEach(function (todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo))
  })
}

// generate summary

const generateSummaryDOM = function (incompleteTodo) {
  const summary = document.createElement("h4")
  summary.textContent = `You have ${incompleteTodo.length} todos left`
  return summary
}