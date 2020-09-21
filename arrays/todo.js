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

// const deleteTodo = function (todos, todoText) {
//   const index = todos.findIndex(function (todo) {
//     return todo.text.toLowerCase() === todoText.toLowerCase()
//   })

//   if (index > -1) {
//     todos.splice(index, 1)
//   }

// }

// const getThingsToDo = function (todos) {
//   return todos.filter(function (todo, index) {
//     return !todo.completed
//   })

// }



// console.log(getThingsToDo(todos))

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }

  })

}

sortTodos(todos)
console.log(todos)


// deleteTodo(todos, "Finish Blog")
// console.log(todos)