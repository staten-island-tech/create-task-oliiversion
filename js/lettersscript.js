let numberGrade = [];

<<<<<<< HEAD
let avgGrade = []

addEventListener("submit", function(avgGrade) {
  avgGrade.push(avgGrade)
})





function convert(avgGrade){
  let gpa = undefined;

  if (avgGrade < 65) {
    gpa = "F"
  }
  else if (avgGrade < 70) {
    gpa = "D"}
  else if (avgGrade < 80) {
    gpa = "C"}
  else if (avgGrade < 90) {
    gpa = "B"}
  else if (avgGrade <= 100) {
    gpa = "A"}

    return gpa;
=======
addEventListener("submit", function (numberGrade) {
  numberGrade.push(numberGrade);
});

function convert(numberGrade) {
  let letterGrade = undefined;

  if (numberGrade < 65) {
    letterGrade = "F";
  } else if (numberGrade < 70) {
    letterGrade = "D";
  } else if (numberGrade < 80) {
    letterGrade = "C";
  } else if (numberGrade < 90) {
    letterGrade = "B";
  } else if (numberGrade <= 100) {
    letterGrade = "A";
  }

  return letterGrade;
>>>>>>> 41929354bbd1f90245bb7fbd8ff7b0ac57092e3a
}

const letterGrade = [
  { letterGrade: "A" <= 100 },
  { letterGrade: "B" < 90 },
  { letterGrade: "C" < 80 },
  { letterGrade: "D" < 70 },
  { letterGrade: "F" < 65 },
];

addEventListener("submit", function (letterGrade) {
  letterGrade.push(letterGrade);
});

<<<<<<< HEAD
module.exports = {avgGrade, gpa}
=======
function convert(letterGrade) {
  let letterGrade = undefined;

  if ((letterGrade = "F")) {
    GPA = "0";
  } else if ((letterGrade = "D")) {
    letterGrade = "1";
  } else if ((numberGrade = "C")) {
    letterGrade = "2";
  } else if ((numberGrade = "B")) {
    letterGrade = "3";
  } else if ((numberGrade = "A")) {
    letterGrade = "4";
  }

  return GPA;
}

module.exports = { numberGrade, letterGrade, GPA };
>>>>>>> 41929354bbd1f90245bb7fbd8ff7b0ac57092e3a
