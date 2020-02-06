const multiplicationTable = maxValue => {
  let i = 1;
  let j = 1;
  let output = '';
  const rstr = '_'; // replace string (string for horizontal lines)
  const rtab = '.......'.replace(/./g,rstr); // replacement for tab character

  // 1st line
  output += '\n' + rstr + rtab + rstr;
  while (j < maxValue + 2) {
    output += rstr + rtab;
    j++;
  }
  output += '\n';
  
  // 2nd line (empty line)
  output += '|\t|'; j = 1;
  while (j < maxValue + 1) {
    output += ' \t';
    j++;
  }
  output += '\t|';

  // 3rd line (header)
  j = 1;
  output += `\n|  X\t|\t`;
  while (j <= maxValue) {
    output += `${j * i}\t`;
    j++;
  }
  output += `|\n`;

  // 4rd line (horizontal line)
  j = 1;
  output += `|${rtab}|`; j = 1;
  while (j < maxValue + 2) {
    output += `${rtab}` + rstr;
    j++;
  }
  output += `\b|\n`;

  // main multiplication table
  i = 1;
  while (i <= maxValue) {
    j = 1;

    output += `|  ${i}\t|\t`;
    while (j <= maxValue) {
      output += `${j * i}\t`;
      j++;
    }
    output += `|`;

    // add horizontal line: last
    if (i === maxValue) {
      j = 1;
      output += `\n|${rtab}|`; j = 1;
      while (j < maxValue + 2) {
        output += `${rtab}` + rstr;
        j++;
      }
    }

    i++;
    output += '\n';
  }
  return output.trim() + '\n\n\n';
};

console.log(
  multiplicationTable(1),
);
console.log(
  multiplicationTable(5),
);
console.log(
  multiplicationTable(10),
);

/* Expected Outputs
1

1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25

1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
4 8 12 16 20 24 28 32 36 40
5 10 15 20 25 30 35 40 45 50
6 12 18 24 30 36 42 48 54 60
7 14 21 28 35 42 49 56 63 70
8 16 24 32 40 48 56 64 72 80
9 18 27 36 45 54 63 72 81 90
10 20 30 40 50 60 70 80 90 100
*/