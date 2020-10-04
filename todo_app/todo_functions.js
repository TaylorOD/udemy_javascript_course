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

// Generate DOM Elements for todos

const generateTodoDOM = function (todo) {
  const p = document.createElement("p")
  p.textContent = todo.text
  return p
}

// Render application todos

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

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