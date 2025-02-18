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
// const createAdder = (a) => {
//   return (b) => {
//     return a + b
//   }
// }
// const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))
// const add100 = createAdder(100)
// console.log(add100(10))



const createTipper = (tip) => {
  return (total) => {
    return tip * total
  }
}

const tip25 = createTipper(.25)
console.log(tip25(10))