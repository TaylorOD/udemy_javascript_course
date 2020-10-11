/* global getSavedNotes */

const titleEl = document.querySelector("#note_title")
const bodyEl = document.querySelector("#note_body")
const removeEl = document.querySelector("#remove_note")
const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
  return note.id === noteID
})

if (note === undefined) {
  location.assign("index.html")
}

titleEl.value = note.title
bodyEl.value = note.body

// save new title for note to local storage using edit page
titleEl.addEventListener("input", function (e) {
  note.title = e.target.value
  saveNotes(notes)
})

// save new body for note to local storage using edit page
bodyEl.addEventListener("input", function (e) {
  note.body = e.target.value
  saveNotes(notes)
})

// remove note on edit page and redirect to home page
removeEl.addEventListener("click", function () {
  removeNote(note.id)
  saveNotes(notes)
  location.assign("index.html")
})

// syncs across edit pages
window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
    note = notes.find(function (note) {
      return note.id === noteID
    })

    if (note === undefined) {
      location.assign("index.html")
    }

    titleEl.value = note.title
    bodyEl.value = note.body
  }
})
