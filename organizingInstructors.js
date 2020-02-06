// In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

const organizeInstructors = instructors => {
  let newObj = {};
  instructors.map((obj) => {
    newObj[obj.course] === undefined ?
      newObj[obj.course] = [(obj.name)] :
      newObj[obj.course].push(obj.name);
  });
  return newObj;
};

// output / expected output
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
/*
  {
    iOS: ["Samuel"],
    Web: ["Victoria", "Karim", "Donald"]
  }
  {
    Blockchain: ["Brendan"],
    Web: ["David", "Carlos"],
    iOS: ["Martha"]
  }
   */