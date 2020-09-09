let myAcconut = {
  name: "Taylor Dorsett",
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {

  account.expenses = account.expenses + amount

}

let addIncome = function (account, amount) {
  account.income = account.income + amount

}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function (account) {
  return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income and $${account.expenses} in expenses.`
}

addExpense(myAcconut, 2.50)
addIncome(myAcconut, 500)
addExpense(myAcconut, 50)
resetAccount(myAcconut)
addIncome(myAcconut, 5000)
addExpense(myAcconut, 1500)

let taylorAccount = getAccountSummary(myAcconut)
console.log(myAcconut)
console.log(taylorAccount)

resetAccount(myAcconut)
console.log(taylorAccount)
console.log(myAcconut)