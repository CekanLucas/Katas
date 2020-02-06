// In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

const numberOfVowels = data => {
  return data.match(/[aeiou]/g).length;
};

console.log(numberOfVowels("orange"),3);
console.log(numberOfVowels("lighthouse labs"),5);
console.log(numberOfVowels("aeiou"),5);