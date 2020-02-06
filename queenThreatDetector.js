// In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

/*  example chessboard [
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
] */

// Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

let whiteQueen = [0, 5];
let blackQueen = [5, 0];

const generateBoard = () => {
  let i = 0;
  const bsl = 8; // board side length
  let board = [];
  while (i < bsl) {
    board.push([]);
    let j = 0;

    while (j < bsl) {
      board[i].push(0);
      j++;
    }
    i++;
  }

  board [ whiteQueen[0] ] [ whiteQueen[1] ] = 1;
  board [ blackQueen[0] ] [ blackQueen[1] ] = 1;
  return board;
};

const queenThreat = board => {
  // go through board replace threatened spots by blackqueen to 2
  let     i = 0;
  while (i < 8) {
    const   shift = Math.abs(i - blackQueen[0]);
    let j = 0;

    while (j < 8) {
      i === blackQueen[0] || j === blackQueen[1] ||
        j === blackQueen[1] - shift || j === blackQueen[1] + shift ?
        board[i][j] = 2 :
        board[i][j] = 0;
      j++;
    }
    i++;
  }
  
  // check if white queen is on area threatened by black queen
  return   board [ whiteQueen[0] ] [ whiteQueen[1] ] === 2 ?
    true : false; //return boolean answer
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);


console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// Expected Output

whiteQueen = [0, 0];
blackQueen = [5, 7];

generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// Expected Output
/* [
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false */