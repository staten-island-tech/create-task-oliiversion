const form = document.getElementById("form");
const resultDiv = document.getElementById("result");
console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input1 = parseInt(form.elements["input1"].value);
  const input2 = parseInt(form.elements["input2"].value);
  const input3 = parseInt(form.elements["input3"].value);
  const input4 = parseInt(form.elements["input4"].value);

  const avgGrade = (input1 + input2 + input3 + input4) / 4;

  let gpa;

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

  resultDiv.textContent = `Your GPA is ${gpa}`;
});
