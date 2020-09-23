const account = {
  name: "Taylor Dorsett",
  income: [],
  expenses: [],
  addIncome: function (income_description, income_ammount) {
    this.income.push({
      description: income_description,
      ammount: income_ammount
    })
  },
  addExpense: function (expense_description, expense_cost) {
    this.expenses.push({
      description: expense_description,
      ammount: expense_cost
    })
  },
  getAccountSummary: function () {
    let totalIncome = 0
    let expenseTotal = 0
    let balance = 0

    this.expenses.forEach(function (item) {
      expenseTotal = expenseTotal + item.ammount
    }),
      this.income.forEach(function (income) {
        totalIncome = totalIncome + income.ammount
      })
    balance = totalIncome - expenseTotal
    return `${this.name} has a balance of $${balance}, an income of $${totalIncome} and $${expenseTotal} in expenses.`
  }
}

// edit getAccount Summary - > shows balance (income - expenses), income, and expenses

account.addExpense("Rent", 2250)
account.addExpense("Coffee", 2.50)
account.addExpense("Cleaning", 100)

account.addIncome("Job", 100000)

console.log(account.getAccountSummary())
console.log(account)
