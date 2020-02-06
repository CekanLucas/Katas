// In this exercise, we will write an algorithm to help taxicabs determine how far away a destination is based on the directions given.

const blocksAway = directions => {
  let ans = { east: 0 , north: 0 }; //answer template
  let currentdirection = directions[0] === 'right' ? 'North' : 'East';
  let i = 0;

  //function takes current direction and updates ans obj and new direction
  let direction = function(dir) {
    switch (dir) {

    case 'North':
      if (directions[i] === 'right') {
        ans.east += directions[ i + 1 ];
        currentdirection = 'East';
      } else {
        ans.east -= directions[ i + 1 ];
        currentdirection = 'West';
      }
      break;
    
    case 'South':
      if (directions[i] === 'right') {
        ans.east -= directions[ i + 1 ];
        currentdirection = 'East';
      } else {
        ans.east += directions[ i + 1 ];
        currentdirection = 'West';
      }
      break;
    
    case 'West':
      if (directions[i] === 'right') {
        ans.north += directions[ i + 1 ];
        currentdirection = 'North';
      } else {
        ans.north -= directions[ i + 1 ];
        currentdirection = 'South';
      }
      break;
    
    case 'East':
      if (directions[i] === 'right') {
        ans.north -= directions[ i + 1 ];
        currentdirection = 'South';
      } else {
        ans.north += directions[ i + 1 ];
        currentdirection = 'North';
      }
      break;
    default:
      console.log('an error occured :(');
    }
    return;
  };

  while (i < directions.length) {
    // console.log(`i is ${i} \t curDir is ${currentdirection}\n`,ans)
    direction(currentdirection);
    i += 2;
  }

  return ans;
};

console.log(
  blocksAway(["right", 2, "left", 3, "left", 1]),
  '\nExpected Output\t {east: 1, north: 3}'
);
console.log(
  blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]),
  '\nExpected Output\t {east: 3, north: 3}'
);
console.log(
  blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]),
  '\nExpected Output\t {east: 0, north: 0}'
);

// Create a function named blocksAway that will receive an array of directions, and return an object that calculates how far north and east those directions will take someone.

// The taxi driver will always start at the same position, in the most south west position on the grid. This means that the output will only need to specify an east and north position, since the taxi driver can only end up in these East and North of the starting point.