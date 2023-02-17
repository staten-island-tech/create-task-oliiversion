const letters = [
  { letter: "A", number: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] },
  { letter: "B", number: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89] },
  { letter: "C", number: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79] },
  { letter: "D", number: [65, 66, 67, 68, 69] },
  { letter: "F", number: x < 65 },
];

function calculategpa(form) {
  var gpa = form.gpa2.value;

  if (gpa == "A") {
    gpa = 4;
  }
  if (gpa == "B") {
    gpa = 3;
  }
  if (gpa == "C") {
    gpa = 2;
  }
  if (gpa == "D") {
    gpa = 1;
  }
  if (gpa == "F") {
    gpa = 0;
  }
  document.getElementById("result1").innerHTML = gpa;
}
