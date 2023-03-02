const form = document.getElementById('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const grade1 = parseInt(form.elements['input1'].value);
    const grade2 = parseInt(form.elements['input2'].value);
    const grade3 = parseInt(form.elements['input3'].value);
    const grade4 = parseInt(form.elements['input4'].value);

    const avgGrade = (input1 + input2 + input3 + input4) / 4;

    let gpa;

    if (avgGrade < 65) {
    gpa = "F"}
    else if (avgGrade < 70) {
      gpa = "D"}
    else if (avgGrade < 80) {
      gpa = "C"}
    else if (avgGrade < 90) {
      gpa = "B"}
    else if (avgGrade <= 100) {
      gpa = "A"}
  
      
    resultDiv.textContent = `Your GPA is ${gpa}`;
});
