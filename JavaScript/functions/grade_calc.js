// student score, total score possible
//15/20 -> you got a C!
// F 0 - 59, D 60-69, C 70-79, B 80-89, A 90-100 

// pass in student score and possible score print to screen
// test every score

// let studentScore = (79)
// let maxScore = (1)

// let studentGrade = studentScore / maxScore

// if (studentGrade >= 90) {
//   console.log("You got an A!")
// } else if (studentGrade >= 80) {
//   console.log("You got a B!")
// } else if (studentGrade >= 70) {
//   console.log("You got a C.")
// } else if (studentGrade >= 60) {
//   console.log("You got a D.")
// } else if (studentGrade < 60) {
//   console.log("You got a F. Please see me after class.")
// }

const gradeCalc = function (studentScore, maxScore) {
  const studentGrade = (studentScore / maxScore) * 100
  let letterGrade = ""

  if (studentGrade >= 90) {
    letterGrade = "A"
  } else if (studentGrade >= 80) {
    letterGrade = "B"
  } else if (studentGrade >= 70) {
    letterGrade = "C"
  } else if (studentGrade >= 60) {
    letterGrade = "D"
  } else {
    letterGrade = "F"
  }
  console.log(`You got an ${letterGrade}. (${studentGrade}%)`)
}

gradeCalc(75, 100)