let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
// let answer = window.prompt(weeklyExpenseQuestions[0])
// console.log(answer)

// let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
// let numberAnswer = parseFloat(stringAnswer)

//TESTING ABOVE-----------

// for (let i = 0; i < weeklyExpenseQuestions.length; i++) { 
//     let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//     weeklyExpenses = weeklyExpenses + answer
// }

// for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
//     monthlyExpenses = monthlyExpenses + answer
// }

// for (let i = 0; i < annualExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//     annualExpenses = annualExpenses + answer
// }

//BONUS #1 Try to ask the questions from each array in reverse order, 
//by changing the initializer, condition, and afterthought of each 
//for loop.

// for (let i = 2; (i < weeklyExpenseQuestions.length) && (i > -1); i--) { 
//     let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//     weeklyExpenses = weeklyExpenses + answer
// }

// for (let i = 3; (i < monthlyExpenseQuestions.length) && (i > -1); i--) {
//     let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
//     monthlyExpenses = monthlyExpenses + answer
// }

// for (let i = 2; (i < annualExpenseQuestions.length) && (i > -1); i--) {
//     let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//     annualExpenses = annualExpenses + answer
// } 

//----------------------
// BONUS #2 Read the documentation here. 
//Then, try to rewrite each of your for loops as while loops.

let i = 0

while (i < weeklyExpenseQuestions.length) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    weeklyExpenses = weeklyExpenses + answer;
    i++;
}

let m = 0
while (m < monthlyExpenseQuestions.length) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[m]));
    monthlyExpenses = monthlyExpenses + answer;
    m++;
}

let a = 0
while (a < annualExpenseQuestions.length) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[a]));
    annualExpenses = annualExpenses + answer;
    a++;
}