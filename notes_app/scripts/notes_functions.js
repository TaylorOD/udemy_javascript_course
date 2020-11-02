/* global getSavedNotes, updateLastEdited, removeNote, saveNotes, moment, updatedAt, notes, filters */
"use strict"

// read existing notes from localstorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes")

// prevents the app from crashing if the data from local storage isnt being read correctly
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

// save notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes))
}

// remove note from list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}


// generate DOM for a note
const generateNoteDom = (note) => {
  const noteEl = document.createElement("div")
  const textEl = document.createElement("a")
  const button = document.createElement("button")

  // setup the remove note button
  button.textContent = "x"
  noteEl.appendChild(button)
  button.addEventListener("click", () => {
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
  textEl.setAttribute("href", `/notes_app/edit.html#${note.id}`)
  noteEl.appendChild(textEl)

  return noteEl

}

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 0
      }
    })
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  }
}

// Render application Notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

  document.querySelector("#notes").innerHTML = ""

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDom(note)
    document.querySelector("#notes").appendChild(noteEl)
  })
}

// Generate the last edited message
const updateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

