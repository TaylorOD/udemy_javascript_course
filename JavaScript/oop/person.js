
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

class Student extends Person {
  constructor(firstName, lastName, age, likes, grade, status) {
    super(firstName, lastName, age, likes)
    this.grade = grade
    this.status = status
  }
  getStatus() {
    if (this.grade > 70) {
      this.status = "passing"
    } else if (this.grade < 70) {
      this.status = "failing"
    }
    return this.status
  }
  getBio() {
    return `${this.firstName} is ${this.getStatus()} this class.`
  }
  updateGrade(grade) {
    this.grade += grade
  }
}

const student1 = new Student("Tray", "Narcovik", 34, ["studying", "learning"], 95)
console.log(student1)
console.log(student1.getBio())
student1.updateGrade(-40)
console.log(student1.getBio())

// const myPerson = new Person("Taylor", "Dorsett", 28, ["Codin"])
// console.log(myPerson.getBio())

// const myEmployee = new Employee("Taylor", "Dorsett", 28, "Software Developer", ["Codin"])
// console.log(myEmployee.getBio())
// console.log(myEmployee.getYearsLeft())

// const me = new Person("Taylor", "Dorsett", 28, ["Climbing", "Walking"])
// me.setName("Tanner Johnson")
// console.log(me.getBio())

// const person2 = new Person("Todd", "Dobbie", 25)
// console.log(person2.getBio())

