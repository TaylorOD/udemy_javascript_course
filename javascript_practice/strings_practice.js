//  1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

let firstName = "Taylor"
let lastName = "Dorsett"

console.log("My name is " + firstName + " " + lastName + ".")

//  2. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

let colorOne = "Red"
let colorTwo = "Blue"
let colorThree = "Green"

console.log("I like " + colorOne + ", " + colorTwo + ", and " + colorThree + ".")

//  3. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

let bookTitle = "Catcher in the Rye"
let bookAuthor = "J.D. Salinger"

console.log("In high school I read " + bookAuthor + "'s " + bookTitle + " and enjoyed it.")

//  4. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

let cityOne = "Burlington"
let cityTwo = "Rodchester"
let cityThree = "Middleton"

console.log("I have been to " + cityOne + ", " + cityTwo + ", and " + cityThree + ".")

// # 5. Write a program that stores a varible as a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

let password = "Joshua"

if (password === "Joshua") {
  console.log("Shall we play a game?")
} else {
  console.log("Access denied.")
}

// 6. Write a program that uses variables to store a movies's title and lead actor, then prints out a sentence using that information using string concatenation (the + operator).

let movieTitle = "Jurassic Park"
let movieLeadActor = "Jeff Goldblum"

console.log("Do you want to watch " + movieTitle + " staring " + movieLeadActor + " tonight?")

//  7. Write a program that stores a varible as a name. If the name is "Santa", print "Presents!". If the name is not "Santa", print "You're not Santa."

let name = "Santa"

if (name === "Santa") {
  console.log("Presents!")
} else {
  console.log("You're not Santa.")
}

// 8. Write a program that uses variables to store three different website URL's, then prints out a sentence using the URL's using string concatenation (the + operator).

let websiteOne = "www.reddit.com"
let websiteTwo = "www.twitter.com"
let websiteThree = "www.google.com"

console.log("My favorite websites are " + websiteOne + " and " + websiteTwo + " but the most useful website is " + websiteThree + ".")

// 9. Write a program that stores a varible. If the varible is "marco", print "polo".

let name = "marco"

if (name === "marco") {
  console.log("polo")
}

//  10. Write a program that uses variables to store a coffee order and price, then prints the coffe order and price in one line using string concatenation (the + operator).

let coffeeOrder = "One Large Black Coffee"
let price = 4.95

console.log("Your total for " + coffeeOrder + " is " + price + ".")