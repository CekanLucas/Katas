//Case Maker part 2

// In this exercise, we will be building an advanced case maker that can convert strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.

const makeCase = (input, theCase) => {

  const Case = typeof(theCase) === 'object' ? theCase[1] : theCase;
  let rules = {};
  
  const capitalization = (letter,letterindex,wordindex) => {
    /* capitalization rules:
      0 = default (nothing capitalized)
      1 = every first letter of every word
      2 = see 1 except the first word
      3 = all letters capitalized */

    switch (rules.capitalization) {
    case 0:
      break;
    case 1:
      letter = letterindex === 0 ? letter.toUpperCase() : letter;
      break;
    case 2:
      letter = wordindex === 0 ? letter :
        letterindex === 0 ?
          letter.toUpperCase() : letter;
      break;
    case 3:
      letter = letter.toUpperCase();
      break;
    default:
        // console.log('There was a error :(',rules[0])
    }
    // console.log(letter,letterindex,wordindex);
    return letter;
  };

  const ruleFunction = function(rules) {
    // biolerplate for implementing rules
    rules.capitalization = theCase[0] === "upper" ? 3 : rules.capitalization;
    input = input.split(' ').map(  //split sentence into words array
      (word,wordindex) => {
        return word.split('').map( //split each word into letter array
          (letter,letterindex) => {
            // console.log("the rules are:\t", rules)
            return capitalization(letter,letterindex,wordindex);
          }
        ).join(''); // join letters back into word
    
      }).join(rules.spaces); // join words according to space rules
  };

  //// case rules object ////
  switch (Case) {

  case ('camel' || Case[1] === 'camel'):  //camel case
    rules = {capitalization:  2,  spaces   : '' };
    ruleFunction(rules);
    break;
  case ('pascal' || Case[1] === 'pascal'): //pascal case
    rules = {capitalization:  1,  spaces  : '' };
    ruleFunction(rules);
    break;
  case ('snake' || Case[1] === 'snake'):  //snake case
    rules = {capitalization:  0,  spaces  : '_'};
    ruleFunction(rules);
    break;
  case ('kebab' || Case[1] === 'kebab'):  //kebab case
    rules = {capitalization:  0,  spaces  : '-'};
    ruleFunction(rules);
    break;
  case ('title' || Case[1] === 'title'):  //Title case
    rules = {capitalization:  1,  spaces  : ' '};
    ruleFunction(rules);
    break;
  }

  



  // bellow is redundant
  /* switch (Case) {

  case ('camel'): //camel case
     input = input.split(' ').map(
      (val,i) => {
        let   wordarr       = val.split('')
        const capitalLetter = wordarr[0].toUpperCase();
        if( i!==0 )
          wordarr[0] = capitalLetter;
          return wordarr.join('');
      }
    ).join('');
    break;
  
  case ('pascal'): //pascal case
    input = input.split(' ').map(
      (val,i) => {
        let   wordarr       = val.split('')
        const capitalLetter = wordarr[0].toUpperCase();
          wordarr[0] = capitalLetter;
          return wordarr.join('');
      }
    ).join('');
    break;

  case ('snake'): //snake case
    input = input.split(' ').map(
      (val,i) => {
        let   wordarr       = val.split('')
        return wordarr.join('');
      }
    ).join('_');
    break;

  case ('kebab'): //kebab case
    input = input.split(' ').map(
      (val,i) => {
        let   wordarr       = val.split('')
        return wordarr.join('');
      }
    ).join('-');
    break

   case ('title'): //title case
    input = input.split(' ').map(
      (val,i) => {
        let   wordarr       = val.split('')
        const capitalLetter = wordarr[0].toUpperCase();
        wordarr[0] = capitalLetter;
        return wordarr.join('');
      }
    ).join(' ');
    break
   
    case ('vowel'): //vowel uppercase
    
    input = input.split(' ').map( wordarr => {

      return wordarr.split('').map(
        letter => {
          return /[aeiou]/.test(letter)?     // vowel test
            letter.toUpperCase():            // capitilise if true
            letter;                          // else return normally
      }).join('');
    }).join(' ');
    break;

    case ('consonant'): //consonant uppercase
    
    input = input.split(' ').map( wordarr => {

      return wordarr.split('').map(
        letter => {                          // used non-capture group regex
          return /(?:[aeiou])/.test(letter)? // consonant test
            letter.toUpperCase():            // capitilise if true
            letter;                          // else return normally
      }).join('');
    }).join(' ');
    break;


  default:
    input = 'error: case not define'
    break;
  } */

  return input;
};
//output and expected output
console.log('\t\t//// CaseMaker 2 ////');
console.log('Case Maker\t output & expected output:\n');
console.log(
  makeCase("this is a string", "camel"),
  '\t\t\t\t>>> output',
  '\nthisIsAString\t\t\t\tcase:camel'
);
console.log(
  makeCase("this is a string", "pascal"),
  '\t\t\t\t>>> output',
  '\nThisIsAString\t\t\t\tcase:pascal'
);
console.log(
  makeCase("this is a string", "snake"),
  '\t\t\t>>> output',
  '\nthis_is_a_string\t\t\tcase:snake'
);
console.log(
  makeCase("this is a string", "kebab"),
  '\t\t\t>>> output',
  '\nthis-is-a-string\t\t\tcase:kebab'
);
console.log(
  makeCase("this is a string", "title"),
  '\t\t\t>>> output',
  '\nThis Is A String\t\t\tcase:title'
);
console.log(
  makeCase("this is a string", "vowel"),
  '\t\t\t>>> output',
  '\nthIs Is A strIng\t\t\tcase:vowel'
);
console.log(
  makeCase("this is a string", "consonant"),
  '\t\t\t>>> output',
  '\nTHiS iS a STRiNG\t\t\tcase:consonant'
);
console.log(
  makeCase("this is a string", ["upper", "snake"]),
  '\t\t\t>>> output',
  '\nTHIS_IS_A_STRING\t\t\tcase:upper&snake'
);