/* We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

  Twenty dollars
  Ten dollars
  Five dollars
  Two dollars
  One dollar
  Quarter (25¢)
  Dime (10¢)
  Nickel (5¢)
  Penny (1¢) */


const calculateChange = (total, cash) => {

  const denStr = // denominations names
[ "twentyDollar",
  "tenDollar",
  "fiveDollar",
  "twoDollar",
  "oneDollar",
  "quarter",
  "dime",
  "nickel",
  "penny" ];

  const denInt = // denominations (number in cents)
[ 2000,
  1000,
  500,
  200,
  100,
  25,
  10,
  5,
  1 ];
  
  let change    = cash % total; // change left
  let resultObj = {}; // resulting object

  for (let i = 0; i < denStr.length; i++) {
    if (change /  denInt[i] > 1) {
      resultObj[denStr[i]] = Math.trunc(change / denInt[i]);
      change %= (resultObj[denStr[i]] * denInt[i]);
    }
  }

  return resultObj;

};

// output / input logged
console.log(calculateChange(1787, 2000));
console.log({ twoDollar: 1, dime: 1, penny: 3 });
console.log(calculateChange(2623, 4000));
console.log({ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 });
console.log(calculateChange(501, 1000));
console.log({ twoDollar: 2, quarter: 3, dime: 2, penny: 4 });