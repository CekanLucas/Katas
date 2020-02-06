// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

// Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.

// here a random number between 0 and 100 you have to guess

const prompt = require("prompt-sync")({eot:true,sigint:true});
const theNumber = Math.round(Math.random() * 100);
let   attempts  = 0;
let   previousAttempts = [];
let   number = 1;

while (1) {

  let userNumber = prompt('Guess a number: ','Did you guess?');
  number = Number(userNumber);

  //type exit to exit out of script //could be a lifesaver
  // could also do ^D or ^C because of configs
  if (userNumber == 'exit') {
    process.exit();
  }

  
  if (Number.isInteger(number) != true) {
    console.log("Not a number! Try again!");
    continue;
  }
  
  if (previousAttempts.indexOf(number) != -1) {
    console.log("Already Guessed!");
  } else {
    previousAttempts.push(number);
    
    if (theNumber < number) {
      attempts++;
      console.log('Too High!');
    } else if (theNumber > number) {
      attempts++;
      console.log('Too Low!');
    } else { // theNumber == number
      attempts++;
      console.log(`You got it! You took ${attempts} attempts!`);
      process.exit();
    }
  }
  
/*    console.log({  //useful console.log for debugging
    "theNUmber":theNumber,
    "attempts":attempts,
    "previousAttempts":previousAttempts
  });  */
}


/* --Sample Input/Output--
Guess a number:
> 12
Too Low!
Guess a number:
> 65
Too High!
Guess a number:
> 65
Already Guessed!
Guess a number:
> asdf
Not a number! Try again!
Guess a number:
> 42
You got it! You took 3 attempts! */


