// We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

const talkingCalendar = date => {
  //get month
  let month =
  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month = month[date.split('/')[1] - 1];
  
  //get day
  const day =
    date.split('/')[2] == 01 ? '1st' :
      date.split('/')[2] == 02 ? '2nd' :
        date.split('/')[2] + 'th';
  
  //get year
  const year = date.split('/')[0];
  
  return `${month} ${day}, ${year}`;
};

// Output and Expected Output logged
console.log(talkingCalendar("2017/12/02"), 'December 2nd, 2017');
console.log(talkingCalendar("2007/11/11"), 'November 11th, 2007');
console.log(talkingCalendar("1987/08/24"), 'August 24th, 1987');
