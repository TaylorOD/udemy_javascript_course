// // const calculateAverage = (thing, ...numbers) => {
// //   // return (numOne + numTwo) / 2
// //   let sum = 0
// //   numbers.forEach((num) => sum += num)
// //   const average = sum / numbers.length
// //   return `the average ${thing} is ${average}`
// // }

// // console.log(calculateAverage("age", 0, 100, 88, 94, 55, 13, 19))

// // const printTeam = (team, coach, ...players) => {
// //   // console.log(team)
// //   // console.log(coach)
// //   let playersArray = []
// //   players.forEach((player) => playersArray.push((" " + player)))
// //   // console.log(playersArray)
// //   console.log(`The team is ${team} coached by ${coach} and the players are ${playersArray}.`)
// // }

// // printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry", "Todd", "Luke")


// const printTeamm = (team, coach, ...players) => {
//   // console.log(team)
//   // console.log(coach)
//   // let playersArray = []
//   // players.forEach((player) => playersArray.push((" " + player)))
//   // console.log(playersArray)
//   console.log(`The team is ${team} coached by ${coach} and the players are ${players.join(", ")}.`)
//   // console.log(firstPlayer, secondPlayer)
// }

// // printTeamm("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry", "Todd", "Luke")

// const team = {
//   name :"Liberty",
//   coach: "Casey Penn",
//   players: ["Marge", "Aiden", "Herbert", "Sherry", "Todd", "Luke"]
// }
// printTeamm(team.name, team.coach, ...team.players)


// let cities = ["Chicago", "Cape Town", "Memphis"]

// const citiesCopy = ["Montptrial", ...cities, "Huston"]

// console.log(cities)
// console.log(citiesCopy)
// console.log(citiesCopy[0])
// console.log(citiesCopy)
// // console.log(citiesCopy.push("bob"))


// cities = [...cities, "Tango"]
// console.log(cities)

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5,
//   yearBuilt: 2017
// }

// let newHouse = {
//   basement: true,
//   ...house,
//   bedrooms: 3
// }
// newHouse.yearBuilt = 2019

// console.log(house)
// console.log(newHouse)

// let person = {
//   name: "Todd",
//   age: 19
// }

// let location = {
//   city: "Chicago",
//   country: "USA"
// }

// let overview = {
//   ...person,
//   ...location
// }


// console.log(person)
// console.log(location)
// console.log(overview)

const todo = {
  id: "soidfoaih",
  text: "Pay the bills",
  completed: false
}

const { text:todoText, completed, details = "No details provided", ...others } = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)