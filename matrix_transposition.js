const transpose = function (matrix) {
  const newMatrix = []
  for (let y = 0; y < matrix[0].length; y++) {
    // console.log(matrix[y])
    newMatrix[y] = []
    for (let x = 0; x < matrix.length; x++) {
      // console.log(matrix[y][x]);
      newMatrix[y].push(matrix[x][y])
    }
  }
  return newMatrix
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));

// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3 
// 4 4 4 4
// ----
// 1 3 5 
// 2 4 6
// ----
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7