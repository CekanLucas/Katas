// Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.


let sumLargestNumbers = data => {

  data.sort( //sort()  array method
    (a,b)=>{ //callback function to sort array of numbers
      return a < b ? 1 : a > b ? -1 : 0; //define comparison rules
    }
  );

  return data[0] + data[1];

};

console.log(sumLargestNumbers([1, 10]),//11
);
console.log(sumLargestNumbers([1, 2, 3]),//5
);
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]),//126
);

/*/////////////// Notes on sort() ///////////////////
 * sort() sorts array so array method
 * sort() mutates array
 * sort() sorts by ASCI code by default (bad!!!)
 * use callback function that defines comparisons for sort
 */