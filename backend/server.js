const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.port || 3001
app.use(express.json());
app.use(cors())

// app.use((req,res)=>{
//   console.log({query:req.query});
//   console.log({body: req.body});
//   console.log({params: req.params});
//   console.log({header: req.headers});
//   res.send({status:"succes1s"});
// })

app.use('/api', require('./gomoku_routes'))

// // define a route to handle GET requests to /api/game
// app.get('/api/game', (req, res) => {
//   // read the game data from db.json
//   const gameData = require('./db.json');
//   res.json(gameData);
// });
// // define a route to handle POST requests to /api/game
// app.post('/api/game', (req, res) => {
//   // update the game data in db.json
//   const gameData = req.body;
//   // TODO: write code to update db.json with the new game data
//   res.json(gameData);
// });

app.listen(port, () => {
  console.log(`http backend server listening on port http://localhost:${port}/api/create_game`);
});
