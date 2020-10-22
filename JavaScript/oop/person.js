
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName  
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })
  
    return bio

  }
  setName(fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

const myPerson = new Person("Taylor", "Dorsett", 28, ["Codin"])
console.log(myPerson.getBio())


// const Person = function (firstName, lastName, age, likes = []) {
//   this.firstName = firstName  
//   this.lastName = lastName
//   this.age = age
//   this.likes = likes
// }

// Person.prototype.getBio = function () {
//   let bio = `${this.firstName} is ${this.age}.`

//   this.likes.forEach((like) => {
//     bio += ` ${this.firstName} likes ${like}.`
//   })

//   return bio
// }

// Person.prototype.setName = function (fullName) {
//   const names = fullName.split(" ")
//   this.firstName = names[0]
//   this.lastName = names[1]
// }

const me = new Person("Taylor", "Dorsett", 28, ["Climbing", "Walking"])
me.setName("Tanner Johnson")
console.log(me.getBio())

const person2 = new Person("Todd", "Dobbie", 25)
console.log(person2.getBio())

