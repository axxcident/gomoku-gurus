const router = require('express').Router();
const gameData = require('./db.json');

router.get('/create_game', (req, res) =>{
    // res.json({status: "Game created"});
    res.json(gameData);
});

router.get('/add_player', (req, res) =>{
    res.json({status: "Player added"});
});

router.get('/play', (req, res) =>{
    res.json({status: "Playing game"});
});

module.exports = router;
