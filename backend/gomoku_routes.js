const fs = require('fs');
const router = require('express').Router();
const gameData = require('./db.json');

router.get('/get_game', (req, res) =>{
    res.json(gameData);
});

// res.json({status: "Game created"});

function isString(value) {
    return typeof value === 'string';
  }

//   Adda Spelare 1
router.post('/add_player1', (req, res) =>{
    const { playerName } = req.body;

    if(playerName !== undefined &&  isString(playerName) && gameData.player1.length === 0) {
      gameData.player1.push(playerName);
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
      res.status(400).json({ status: "Invalid player name" });
    }
});

// Adda Spelare 2
router.post('/add_player2', (req, res) =>{
    const { playerName } = req.body;

    if(playerName !== undefined &&  isString(playerName) && gameData.player2.length === 0) {
      gameData.player2.push(playerName);
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
      res.status(400).json({ status: "Invalid player name" });
    }
});


router.get('/play', (req, res) =>{
    res.json({status: "Playing game"});
});

module.exports = router;
