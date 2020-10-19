const Person = function (firstName, lastName, age) {
  this.firstName = firstName  
  this.lastName = lastName
  this.age = age
}


const me = new Person("Taylor", "Dorsett", 28)
console.log(me)

const person2 = new Person("Todd", "Dobbie", 25)
console.log(person2)

