const notes = [
  {
    title: "My next Trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Coding projects",
    body: "JavaScript and Ruby",
  },
  {
    title: "Buy new watch",
    body: "Gold",
  },
]

const filters = {
  searchText: "",
}

// localStorage.setItem("location", "Philadelphia")
// console.log(localStorage.getItem("location"))
// localStorage.removeItem("location")
// localStorage.clear()

// const user = {
//   name: "Taylor",
//   age: 27,
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)

// localStorage.setItem("user", userJSON)

const userJSON = localStorage.getItem("user")
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector("#notes").innerHTML = ""

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p")
    noteEl.textContent = note.title
    document.querySelector("#notes").appendChild(noteEl)
  })
}

renderNotes(notes, filters)

// document.querySelector("#new-note-form").addEventListener("submit", function (e) {
//   e.preventDefault()
//   notes.push({
//     title: e.target.elements.newNote.value,
//     body: ""
//   })

//   renderNotes(notes, filters)
//   e.target.elements.newNote.value = ""
// })

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value)
})
