let output = "";
for (let i = 1; i <= 10; i++) {
  output += `5 * ${i} = ${5 * i}`;
  if (i < 10) {
    output += " / ";
  }
}
console.log(output);
