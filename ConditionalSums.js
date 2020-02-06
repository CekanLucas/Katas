// Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

// Use some sort of looping. Do Not use Array.prototype.filter()

const conditionalSum = (values, condition) => {

  let acc = 0; //accumulated value

  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      values[i] % 2 === 0 ? acc += values[i] : acc += 0;
    }
  } else {
    for (let i = 0; i < values.length; i++) {
      values[i] % 2 === 0 ?  acc += 0 : acc += values[i];
    }
  }

  return acc;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"),6);
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"),9);
console.log(conditionalSum([13, 88, 12, 44, 99], "even"),144);
console.log(conditionalSum([], "odd"),0);