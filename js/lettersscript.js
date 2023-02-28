let numberGrade = [];

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
