let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
// let answer = window.prompt(weeklyExpenseQuestions[0])
// console.log(answer)

// let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
// let numberAnswer = parseFloat(stringAnswer)

for (let i = 0; i < weeklyExpenseQuestions.length; i++) { 
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}

for (let i = 0; i < annualExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
}