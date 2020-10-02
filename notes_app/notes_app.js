let notes = []

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

// const userJSON = localStorage.getItem("user")
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)

const notesJSON = localStorage.getItem("notes")

if (notesJSON != null) {
  notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector("#notes").innerHTML = ""

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p")

    if (note.title.length > 0) {
      noteEl.textContent = note.title
    } else {
      noteEl.textContent = "Unnamed Note"
    }
    document.querySelector("#notes").appendChild(noteEl)
  })
}

renderNotes(notes, filters)

// document.querySelector("#new-note-form").addEventListener("submit", function (e) {
//   e.preventDefault()
//   notes.push({
// title: e.target.elements.newNote.value,
//     body: ""
//   })

//   renderNotes(notes, filters)
//   e.target.elements.newNote.value = ""
// })

document.querySelector("#create-note").addEventListener("click", function (e) {
  notes.push({
    title: "",
    body: "",
  })
  localStorage.setItem("notes", JSON.stringify(notes))
  renderNotes(notes, filters)
})

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value)
})