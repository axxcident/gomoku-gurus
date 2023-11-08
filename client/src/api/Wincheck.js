const checkFiveInARow = function(board, player) {
  // Check rows
  for (let row of board) {
      for (let i = 0; i < row.length - 4; i++) {
          if (row.slice(i, i + 5).every(cell => cell === player)) {
              return true;
          }
      }
  }

  // Check columns
  for (let col = 0; col < board[0].length; col++) {
      for (let i = 0; i < board.length - 4; i++) {
          if ([0, 1, 2, 3, 4].every(j => board[i + j][col] === player)) {
              return true;
          }
      }
  }

  // Check diagonals
  for (let i = 0; i < board.length - 4; i++) {
      for (let j = 0; j < board[i].length - 4; j++) {
          if ([0, 1, 2, 3, 4].every(k => board[i + k][j + k] === player)) {
              return true;
          }
          if ([0, 1, 2, 3, 4].every(k => board[i + k][j + 4 - k] === player)) {
              return true;
          }
      }
  }

  return false;
}
export { checkFiveInARow };
