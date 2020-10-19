// Prototypal Inheritance - 

const Person = function (firstName, lastName, age) {
  this.firstName = firstName  
  this.lastName = lastName
  this.age = age
}

Person.prototype.getBio = function () {
  return `${this.firstName} is ${this.age}.`
}

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ")
  this.firstName = names[0]
  this.lastName = names[1]
}


const me = new Person("Taylor", "Dorsett", 28)
me.setName("Tanner Johnson")
console.log(me.getBio())

const person2 = new Person("Todd", "Dobbie", 25)
console.log(person2.getBio())

