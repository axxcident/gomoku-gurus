const express = require('express');
const app = express();
const port = 3000; // choose any available port number

app.use(express.json()); // enable JSON parsing for incoming requests

// define a route to handle GET requests to /api/game
app.get('/api/game', (req, res) => {
  // read the game data from db.json
  const gameData = require('./db.json');
  res.json(gameData);
});

// define a route to handle POST requests to /api/game
app.post('/api/game', (req, res) => {
  // update the game data in db.json
  const gameData = req.body;
  // TODO: write code to update db.json with the new game data
  res.json(gameData);
});

// start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
