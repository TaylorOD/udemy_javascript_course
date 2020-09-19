// 1. make the todos array of objects -> text, completed (true or false)
// 2. create a function that to remove a todo by text value (remove finish blog)

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

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })

  if (index > -1) {
    todos.splice(index, 1)
  }

}

deleteTodo(todos, "Finish Blog")
console.log(todos)