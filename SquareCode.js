// In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

/*  ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots */

// The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

// The message is then coded by reading down the columns going left to right. For example, the message above is coded as:
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

// And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.

const squareCode = message => {
  // length of word calculated from squaring
  const square = Math.ceil(Math.sqrt(message.replace(/\s/g,'').length));
  // regex for add space after certain amount of characters
  const regex = new RegExp(`((.){${square}})`,'g');

  // EXPLANATION: take message remove spaces then add space after certain amount of characters split this into nested array of words with the letters of words also being split into a arrays.
  const squareArr =
     message.replace(/\s/g,'').replace(regex,'$1' + ' ').trim().split(' ').map(el => {
       return el.split('');
     });

  // console.log(squareArr); // to see for yourself
  
  let squarecode = '';
  for (let i = 0; i < square; i++) {
    let wordcode = '';
    for (let j = 0; j < squareArr.length; j++) {
      wordcode += squareArr[j][i];
    }
    squarecode += wordcode + ' ';
  }
  
  return squarecode.trim().replace(/(undefined)/g,'');
};

console.log(
  'Input:\t\t',
  'chill out',
  '\nOutput:\t\t',
  squareCode(
    "chill out"),
  '\nExpected:\t',
  'clu hlt io  \n'
);

console.log(
  'Input:\t\t',
  'feed the dog',
  '\nOutput:\t\t',
  squareCode(
    "feed the dog"),
  '\nExpected:\t',
  'fto ehg ee dd\n'
);

console.log(
  'Input:\t\t',
  'have a nice day',
  '\nOutput:\t\t',
  squareCode(
    "have a nice day"),
  '\nExpected:\t',
  'hae and via ecy\n'
);


console.log(
  'Input:\t\t',
  'if man was meant to stay on the ground god would have given us roots',
  '\nOutput:\t\t',
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"),
  '\nExpected:\t',
  'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau\n',''
);