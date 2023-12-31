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
      name: 'new game',
      round: 0,
      playerTurn: 1,
      player1: [],
      player2: [],
      state: 'Nytt spel',
      board: {
        minInRow: 5,
        cols: 16,
        rows: 16,
        tiles: Array(17).fill(Array(17).fill(0)), // Fill the board with zeros
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

// Hämta ett specifik bräda med hjälp av boardId
router.get('/get_board/:boardId', (req, res) => {
  const { boardId } = req.params;
  if (gameData[boardId]) {
    res.json(gameData[boardId]);
    console.log('individual board fetched')
  } else {
    res.status(404).json({ status: 'Board not found' });
  }
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
router.patch('/click_tile/:boardId', (req, res) =>{
  const { rowId } = req.body;
  const { colId } = req.body;
  const { playerName } = req.body;
  const { isPlayer1orPlayer2 } = req.body;
  const { boardId } = req.params;

  if(gameData[boardId] && !isNaN(isPlayer1orPlayer2) && rowId !== undefined && colId !== undefined && !isNaN(rowId) && !isNaN(colId) && typeof playerName === 'string') {

    gameData[boardId].board.tiles[rowId][colId] = isPlayer1orPlayer2;
    const updatedJson = JSON.stringify(gameData);

    fs.writeFile('./db.json', updatedJson, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ status: "Error writing to file" });
        } else {
          console.log(`Data written to file. Player named ${playerName} (player: ${isPlayer1orPlayer2}) clicked tile ${rowId} & ${colId}`);
          res.json({ status: `Tile changed: Player named ${playerName} (player: ${isPlayer1orPlayer2}) clicked tile ${rowId} & ${colId}`});
        }
    });
  }
  else {
    res.status(400).json({ status: "something went wrong" });
  }
});

// Ändra spel status för en specifik bräda
router.patch('/change_board_state/:boardId', (req, res) => {
    const { boardId } = req.params;
    const { newState } = req.body;

    if (gameData[boardId] && newState !== undefined && isString(newState)) {
      gameData[boardId].state = newState;
      const updatedJson = JSON.stringify(gameData);

      fs.writeFile('./db.json', updatedJson, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ status: 'Error writing to file' });
        } else {
          console.log('Board state changed and written to file');
          res.json({ status: 'Board state changed' });
        }
      });
    } else {
      res.status(400).json({ status: 'Invalid state or board not found' });
    }
});

// Återställa board med id
router.patch('/reset_board/:boardId', (req, res) => {
  const { boardId } = req.params;

  if (gameData[boardId]) {
    // återställa till den orginala data
    gameData[boardId].board.tiles = Array(17).fill(Array(17).fill(0));

    // Uppdatera json data
    const updatedJson = JSON.stringify(gameData);

    fs.writeFile('./db.json', updatedJson, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'Error writing to file' });
      } else {
        console.log('Board reset successful');
        res.json({ status: 'Board reset successful' });
      }
    });
  } else {
    res.status(404).json({ status: 'Board not found' });
  }
});

// öka siffra på drag
router.patch('/increment_rounds/:boardId', (req, res) => {
  const { boardId } = req.params;

  if (gameData[boardId]) {
    gameData[boardId].round += 1; // Increment the rounds value
    const updatedJson = JSON.stringify(gameData);

    fs.writeFile('./db.json', updatedJson, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'Error writing to file' });
      } else {
        console.log('Rounds incremented and written to file');
        res.json({ status: 'Rounds incremented' });
      }
    });
  } else {
    res.status(400).json({ status: 'Board not found' });
  }
});

// nollställ siffra på drag för bräda
router.patch('/zero_rounds/:boardId', (req, res) => {
  const { boardId } = req.params;

  if (gameData[boardId]) {
    gameData[boardId].round = 0;
    // Update JSON data
    const updatedJson = JSON.stringify(gameData);
    fs.writeFile('./db.json', updatedJson, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'Error writing to file' });
      } else {
        console.log('Round count reset successful');
        res.json({ status: 'Round count reset successful' });
      }
    });
  } else {
    res.status(404).json({ status: 'Board not found' });
  }
});

// nollställ siffra på drag för bräda
router.patch('/reset_player/:boardId', (req, res) => {
  const { boardId } = req.params;

  if (gameData[boardId]) {
    gameData[boardId].playerTurn = 1;
    // Update JSON data
    const updatedJson = JSON.stringify(gameData);
    fs.writeFile('./db.json', updatedJson, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'Error writing to file' });
      } else {
        console.log('Round count reset successful');
        res.json({ status: 'Round count reset successful' });
      }
    });
  } else {
    res.status(404).json({ status: 'Board not found' });
  }
});

// byt till andra spelare
router.patch('/change_player/:boardId', (req, res) => {
  const { boardId } = req.params;

  if (gameData[boardId].playerTurn === 1) {
    gameData[boardId].playerTurn = 2;
    // Update JSON data
    const updatedJson = JSON.stringify(gameData);
    fs.writeFile('./db.json', updatedJson, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'Error writing to file' });
      } else {
        console.log('Round count reset successful');
        res.json({ status: 'Round count reset successful' });
      }
    });
  } else if (gameData[boardId].playerTurn === 2) {
    gameData[boardId].playerTurn = 1;
    // Update JSON data
    const updatedJson = JSON.stringify(gameData);
    fs.writeFile('./db.json', updatedJson, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'Error writing to file' });
      } else {
        console.log('Round count reset successful');
        res.json({ status: 'Round count reset successful' });
      }
    });
  } else {
    res.status(404).json({ status: 'Board not found' });
  }
});


router.get('/play', (req, res) =>{
    res.json({status: "Playing game"});
});

module.exports = router;
