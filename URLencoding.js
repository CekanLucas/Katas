const urlEncode = text => {
  return text.trim().replace(/\s/g,'%20');
};

console.log(
  urlEncode("Lighthouse Labs"),
  'Lighthouse%20Labs'
);
console.log(
  urlEncode(" Lighthouse Labs "),
  'Lighthouse%20Labs'
);
console.log(
  urlEncode("blue is greener than purple for sure"),
  'blue%20is%20greener%20than%20purple%20for%20sure'
);
