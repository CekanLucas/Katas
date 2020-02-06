const instructorWithLongestName = instructors => {

  instructors.sort( //sort()  array method
    (a,b)=>{ //callback function to sort array of numbers
      return a.name.length < b.name.length ?  1 :
        a.name.length > b.name.length ? -1 : 0;
    }
  );

  return instructors[0];

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]),
{name: "Jeremiah", course: "Web"}
);
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]),
{name: "Domascus", course: "Web"}
);


