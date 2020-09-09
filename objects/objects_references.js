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
  let balance = account.income - account.expenses
  return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses.`
}

addIncome(myAcconut, 500)
addExpense(myAcconut, 50)
console.log(myAcconut)

resetAccount(myAcconut)

addIncome(myAcconut, 5000)
addExpense(myAcconut, 1500)

console.log(myAcconut)
console.log(getAccountSummary(myAcconut))