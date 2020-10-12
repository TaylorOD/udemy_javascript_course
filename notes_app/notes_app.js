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

// const now = new Date("January 21 2001 6:25:01")
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)

// console.log(myDate.getFullYear())

// console.log(now.toString())
// console.log(now.getTime())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const birthday = new Date("May 20 1992 5:19:30")
const graduation = new Date("August 15 2010 3:14:20")

console.log(birthday)
console.log(graduation)

const birthdayTimestamp = birthday.getTime()
const graduationTimestamp = graduation.getTime()

console.log(birthdayTimestamp)
console.log(graduationTimestamp)

if (birthdayTimestamp > graduationTimestamp) {
  console.log(graduation.toString())
} else if (graduationTimestamp > birthdayTimestamp) {
  console.log(birthday.toString())
}
