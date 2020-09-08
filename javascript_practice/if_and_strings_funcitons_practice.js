// # 1. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

// let varOne = 9
// let varTwo = 1

// if (varOne < 10 && varTwo < 10) {
//   console.log(1)
// } else {
//   console.log(0)
// }

// # 2. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// let variable = 33

// if (variable < 10) {
//   console.log(9)
// } else if (variable < 20) {
//   console.log(19)
// } else if (variable < 30) {
//   console.log(29)
// } else {
//   console.log(-1)
// }

//  3. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator) and a second with template strings.

let bookTitle = "Mooncop"
let bookAuthor = "Aman"

console.log("I am currently reading " + bookTitle + " by " + bookAuthor + ".")
console.log(`I am currently reading ${bookTitle} by ${bookAuthor}.`)