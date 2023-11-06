const fs = require('fs');
const router = require('express').Router();
const gameData = require('./db.json');
const { v4: uuidv4 } = require('uuid');

// Hämta alla spel
router.get('/get_game', (req, res) =>{
    res.json(gameData);
});

// Skapa ett nytt spel
router.post('/create_new_board', (req, res) => {
    // Generate a unique identifier for the new board
    const boardId = uuidv4();

    // Define the new board object
    const newBoard = {
      id: boardId,
      name: 'empty game',
      round: 1,
      playerTurn: 1,
      player1: [],
      player2: [],
      state: 'new',
      board: {
        minInRow: 5,
        cols: 16,
        rows: 16,
        tiles: Array(16).fill(Array(16).fill(0)), // Fill the board with zeros
      },
    };

    // Add the new board to your JSON data
    gameData[boardId] = newBoard;

    // Convert the updated object back to JSON
    const updatedJson = JSON.stringify(gameData);

    // Write the updated JSON to the file
    fs.writeFile('./db.json', updatedJson, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'Error writing to file' });
      } else {
        console.log('New board created and written to file');
        res.json({ status: 'New board created', boardId });
      }
    });
  });

// Kolla om det är en sträng
function isString(value) {
    return typeof value === 'string';
  }

// Addera Spelare 1
router.post('/add_player1/:boardId', (req, res) =>{
    const { playerName } = req.body;
    const { boardId } = req.params;

    if(gameData[boardId] && playerName !== undefined &&  isString(playerName) && gameData[boardId].player1.length === 0) {
      gameData[boardId].player1.push(playerName);
      const updatedJson = JSON.stringify(gameData);

      fs.writeFile('./db.json', updatedJson, (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ status: "Error writing to file" });
          } else {
            console.log('Data written to file');
            res.json({ status: "Player added" });
          }
      });
    }
    else {
      res.status(400).json({ status: "Invalid player name or board not found" });
    }
});

// Addera Spelare 2
router.post('/add_player2/:boardId', (req, res) =>{
  const { playerName } = req.body;
  const { boardId } = req.params;

  if(gameData[boardId] && playerName !== undefined &&  isString(playerName) && gameData[boardId].player2.length === 0) {
    gameData[boardId].player2.push(playerName);
    const updatedJson = JSON.stringify(gameData);

    fs.writeFile('./db.json', updatedJson, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ status: "Error writing to file" });
        } else {
          console.log('Data written to file');
          res.json({ status: "Player added" });
        }
    });
  }
  else {
    res.status(400).json({ status: "Invalid player name or board not found" });
  }
});

// Klicka på ruta och ändra värde i Board
router.post('/click_tile/:boardId', (req, res) =>{
  const { rowId } = req.body;
  const { colId } = req.body;
  const { playerName } = req.body;
  const { isPlayer1orPlayer2 } = req.body;
  const { boardId } = req.params;

  if(gameData[boardId] && !isNaN(isPlayer1orPlayer2) && rowId !== undefined && colId !== undefined && !isNaN(rowId) && !isNaN(colId) && isString(playerName)) {

    gameData[boardId].board.tiles[rowId][colId] = isPlayer1orPlayer2;
    const updatedJson = JSON.stringify(gameData);

    fs.writeFile('./db.json', updatedJson, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ status: "Error writing to file" });
        } else {
          console.log(`Data written to file player ${isPlayer1orPlayer2} clicked tile ${rowId} ${colId}`);
          res.json({ status: `Tile changed: player ${isPlayer1orPlayer2} clicked tile ${rowId} ${colId}` });
        }
    });
  }
  else {
    res.status(400).json({ status: "something went wrong" });
  }
});


router.get('/play', (req, res) =>{
    res.json({status: "Playing game"});
});

module.exports = router;
