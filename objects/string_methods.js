// let name = "Taylor Dorsett"

// // length 
// console.log(name.length)

// // covert to uppercase

// console.log(name.toUpperCase())

// console.log(name.toLowerCase())

// console.log(name.includes("t"))

// .trim removes spaces in strings - can sanitize data

// isValidPassword
// return true if length is more than 8 - doesnt contain password

let isValidPassword = function (password) {
  if (password.length < 8 || password.includes("password")) {
    return "Error - Password must be less than 8 characters and cannot include word `Password`."

  } else {
    return "Valid Password."
  }


}

console.log(isValidPassword("asdfis"))
console.log(isValidPassword("asdoifsoadihf@!"))
console.log(isValidPassword("passwordsdfijsaldjfasdklj"))