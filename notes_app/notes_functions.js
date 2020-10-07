// read existing notes from localstorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes")

  if (notesJSON != null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// save notes to local storage
const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes))
}

// generate DOM for a note
const generateNoteDom = function (note) {
  const noteEl = document.createElement("div")
  const textEl = document.createElement("span")
  const button = document.createElement("button")

  // setup the remove note button
  button.textContent = "x"
  noteEl.appendChild(button)

  // setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = "Unnamed Note"
  }
  noteEl.appendChild(textEl)

  return noteEl

}

// Render application Notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector("#notes").innerHTML = ""

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDom(note)
    document.querySelector("#notes").appendChild(noteEl)
  })
}