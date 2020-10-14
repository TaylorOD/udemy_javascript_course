const now = new Date("January 21 2001 6:25:01")

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

// ----

const now = moment()
now.valueOf()
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