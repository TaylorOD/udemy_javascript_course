let notes = getSavedNotes()

const filters = {
  searchText: "",
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4()
  notes.push({
    id: id,
    title: "",
    body: "",
  })
  saveNotes(notes)
  location.assign(`edit.html#${id}`)
})

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value)
})

// sync edit and index title storage
window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})

const now = moment()
// now.add(1, "week").subtract(10, "days")
console.log(now.format("MMMM Do, YYYY"))
console.log(now.fromNow())
// this allows us to set the date created as something then say when that when or roughly how long ago it was

const nowTimeStamp = now.valueOf()
console.log(nowTimeStamp)
console.log(moment(nowTimeStamp).toString())

const birthday = moment()
// console.log(birthday.subtract(5, "month").add(7, "days"))

birthday.year(1992).month(4).day(10)
console.log(birthday.format("MMM D, YYYY"))