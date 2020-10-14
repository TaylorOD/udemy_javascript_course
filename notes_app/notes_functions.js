/*  global notes, filters */

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

// remove note from list
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id
  })

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}


// generate DOM for a note
const generateNoteDom = function (note) {
  const noteEl = document.createElement("div")
  const textEl = document.createElement("a")
  const button = document.createElement("button")

  // setup the remove note button
  button.textContent = "x"
  noteEl.appendChild(button)
  button.addEventListener("click", function () {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = "Unnamed Note"
  }
  textEl.setAttribute("href", `edit.html#${note.id}`)
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

// Creates a timestamp for each new note
const createdAt = moment().valueOf()

// Updates timestamp for each note when edited
let updatedAt = moment().valueOf()
