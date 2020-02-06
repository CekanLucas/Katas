/* node reverse.js hello goodbye
olleh
eybdoog
node reverse.js 1 fish 2 fish
1
hsif
2
hsif */

const args = process.argv;

const reverseStr = str => {
  return str.split('').reduceRight((acc,cur) =>{
    return acc += cur;
  });
};

args.forEach((el,i) => {
  i >= 2 ? console.log(reverseStr(el)) : '';
});