let avgGrade = [];

addEventListener("submit", function (avgGrade) {
  avgGrade.push(avgGrade);
});

function convert(avgGrade) {
  let gpa = undefined;

  if (avgGrade < 65) {
    gpa = "F";
  } else if (avgGrade < 70) {
    gpa = "D";
  } else if (avgGrade < 80) {
    gpa = "C";
  } else if (avgGrade < 90) {
    gpa = "B";
  } else if (avgGrade <= 100) {
    gpa = "A";
  }

  return gpa;
}
addEventListener("submit", function (letterGrade) {
  letterGrade.push(letterGrade);
});

module.exports = { avgGrade, gpa };
