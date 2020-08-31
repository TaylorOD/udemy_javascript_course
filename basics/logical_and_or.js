let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only Vegan Dishes")
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Some Vegan Dishes")
} else {
  console.log("Anything - Vegan or Not")
}
