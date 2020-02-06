// We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

const camelCase = input => {
  input = input.split(' ').map(
    (val,i) => {
      let   wordarr       = val.split('');
      const capitalLetter = wordarr[0].toUpperCase();
      if (i !== 0)
        wordarr[0] = capitalLetter;
      return wordarr.join('');
    }
  ).join('');

  return input;
};

// output and expected output
console.log('\t\t//// CaseMaker 1 ////');
console.log('camelCaseMaker\t output & expected output:\n');
console.log(
  camelCase("this is a string"),
  '\nthisIsAString'
);

console.log(
  camelCase("loopy lighthouse"),
  '\nloopyLighthouse'
);

console.log(
  camelCase("supercalifragalisticexpialidocious"),
  '\nsupercalifragalisticexpialidocious'
);