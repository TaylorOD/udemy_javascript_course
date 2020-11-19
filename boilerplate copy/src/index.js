const calculateAverage = (thing, ...numbers) => {
  // return (numOne + numTwo) / 2
  let sum = 0
  numbers.forEach((num) => sum += num)
  const average = sum / numbers.length
  return `the average ${thing} is ${average}`
}

console.log(calculateAverage("age", 0, 100, 88, 94, 55, 13, 19))

const printTeam = (team, coach, ...players) => {
  // console.log(team)
  // console.log(coach)
  let playersArray = []
  players.forEach((player) => playersArray.push((" " + player)))
  // console.log(playersArray)
  console.log(`The team is ${team} coached by ${coach} and the players are ${playersArray}.`)
}

printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry", "Todd", "Luke")


const printTeamm = (team, coach, ...players) => {
  // console.log(team)
  // console.log(coach)
  // let playersArray = []
  // players.forEach((player) => playersArray.push((" " + player)))
  // console.log(playersArray)
  console.log(`The team is ${team} coached by ${coach} and the players are ${players.join(", ")}.`)
}

printTeamm("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry", "Todd", "Luke")