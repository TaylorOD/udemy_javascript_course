// const myFunction = () => {
//   const message = "this is my message"
//   const printMessage = () => {
//     console.log(message)
//   }
//   return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()


// const createCounter = () => {
//   let count = 0

//   return {
//     increment() {
//       count += 1
//     },
//     decrement() {
//       count -= 1
//     },
//     get() {
//       return count
//     }
//   }
// }

// const counter = createCounter()
// counter.increment()
// counter.decrement()
// counter.decrement()
// console.log(counter.get())

// adder
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(10))

// Tipper

// const createTipper = (total) => {
//   return (tip) => {

//     twenty() {
//       tip *= 0.20
//     },
//     ten() {
//       tip = total * 0.10
//     },
//     twentyFive() {
//       tip = total * 0.25
//     },
//     getTip() {
//       return tip
//     }
//   }
// }

const createTipper = (tip) => {
  return (total) => {
    return tip *= total
  }
}

const tip10 = createTipper(.10)
console.log(tip10(10))
const tip15 = createTipper(.15)
console.log(tip15(10))
const tip25 = createTipper(.25)
console.log(tip25(10))