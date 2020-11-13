// const notes = ["Note 1", "Note 2", "Note 3"]

const notes = [{
              title: "My next Trip",
              body: "I would like to go to Spain"

            }, {
              title: "Coding projects",
              body: "JavaScript and Ruby"

            }, {
              title: "Buy new watch",
              body: "Gold"

            }];


// notes.push("My new note")
// notes.splice(1, 1, "New second Item")
// notes[1]
// console.log(notes[notes.length - 1])
// notes[2] = "this is the new note 3"
// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
// }

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}


console.log(findNotes(notes, 'buy'))

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title === noteTitle
//   })
//   return notes[index]
// }

// const note = findNote(notes, 'BUY new watch')
// console.log(note)
