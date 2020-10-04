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
  const noteEl = document.createElement("p")

  if (note.title.length > 0) {
    noteEl.textContent = note.title
  } else {
    noteEl.textContent = "Unnamed Note"
  }
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