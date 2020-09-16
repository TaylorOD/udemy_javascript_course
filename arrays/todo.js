const todos = ["Practice JavaScript", "Update Resume", "Finish Blog", "Write Write Up", "Send Invoice"]

todos.splice(2, 1)
todos.push("Make Intro")
todos.shift()



console.log(`You have ${todos.length} todos.`)
console.log(todos)

todos.forEach(function (todo, index) {
  console.log(`${index + 1}. ${todo} `)


})
