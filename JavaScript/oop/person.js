
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

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`
  }
  getYearsLeft() {
    return 65 - this.age
  }
}





const myPerson = new Person("Taylor", "Dorsett", 28, ["Codin"])
console.log(myPerson.getBio())

const myEmployee = new Employee("Taylor", "Dorsett", 28, "Software Developer", ["Codin"])
console.log(myEmployee.getBio())
console.log(myEmployee.getYearsLeft())

const me = new Person("Taylor", "Dorsett", 28, ["Climbing", "Walking"])
me.setName("Tanner Johnson")
console.log(me.getBio())

const person2 = new Person("Todd", "Dobbie", 25)
console.log(person2.getBio())

