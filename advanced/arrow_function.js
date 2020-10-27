const square = (num) => num * num


const squareLong = (num) => {
  return num * num
}

console.log(square(5))

const people = [{
  name: "Sami",
  age: 27
}, {
  name: "Todd",
  age: 29
}, {
  name: "Jen",
  age: 33
}, {
  name: "Luke",
  age: 22
}]

// const under30 = people.filter(function (person) {
//   return person.age < 30
// })

// console.log(under30)

// const under30short = people.filter((person) => person.age < 30)

// console.log(under30short)


const twentyTwo = people.find((person) => person.age === 22)
console.log(twentyTwo.name)