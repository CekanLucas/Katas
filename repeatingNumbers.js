// Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.


const repeatNumbers = data => {
  
  let finalstr = '';

  data.map(
    val => {

      let i = 0;

      while (i < val[1]) {
        finalstr += val[0];
        i++;
      }

      return finalstr += ', ';
    }
  );

  return finalstr.slice(0,finalstr.length - 2);
  
  // alternative works as well
  // return finalstr.replace(/(,\s)$/,'');
};

console.log(repeatNumbers([[1, 10]]),'1111111111');
console.log(repeatNumbers([[1, 2], [2, 3]]),'11, 222');
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]),'10101010, 343434343434, 9292');