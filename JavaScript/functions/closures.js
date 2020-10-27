const myFunction = () => {
  const message = "this is my message"
  const printMessage = () => {
    console.log(message)
  }
  return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()