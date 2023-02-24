
let numberGrade = []

addEventListener("submit", function(numberGrade) {
  numberGrade.push(numberGrade)
})





function convert(numberGrade){
  let letterGrade = undefined;

  if (numberGrade < 65) {
    letterGrade = "F"
  }
  else if (numberGrade < 70) {
    letterGrade = "D"}
  else if (numberGrade < 80) {
    letterGrade = "C"}
  else if (numberGrade < 90) {
    letterGrade = "B"}
  else if (numberGrade <= 100) {
    letterGrade = "A"}

    return letterGrade;
}



module.exports = {numberGrade, letterGrade}