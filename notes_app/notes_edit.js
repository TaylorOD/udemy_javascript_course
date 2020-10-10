/* global getSavedNotes */

const noteID = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
  return note.id === noteID
})

if (note === undefined) {
  location.assign("/index.html")
}

document.querySelector("#note_title").value = note.title
document.querySelector("#note_body").value = note.body





// remove note on edit page and redirect to home page
document.querySelector("#remove_note").addEventListener("click", function () {
  removeNote(note.id)
  saveNotes(notes)
  location.assign("/index.html")
})