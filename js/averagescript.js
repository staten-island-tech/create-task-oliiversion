const inputgrades = [
  { variable: "a", number: input },
  { variable: "b", number: input },
  { variable: "c", number: input },
  { variable: "d", number: input },
  { variable: "e", number: input },
  { variable: "f", number: input },
  { variable: "g", number: input },
  { variable: "h", number: input },
];

function average(a, b, c, d, e, f, g, h) {
  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0 && g > 0 && h > 0) {
    return a + b + c + d + e + f + g + h;
  }
  return (a + b + c + d + e + f + g + h) / 8;
}

console.log((90 + 91 + 92 + 93 + 94 + 95 + 96 + 97) / 8);
