let myAcconut = {
  name: "Taylor Dorsett",
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {

  account.expenses = account.expenses + amount
  console.log(account)

}

addExpense(myAcconut, 2.50)

console.log(myAcconut)