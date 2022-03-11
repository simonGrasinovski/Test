const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

router.get('/', async (req, res) => {
    const { title } = req.query;

    const games = await Game.find();

    const search = (query) => {
       return query.filter(results => {
           return results.name.toLowerCase().includes(title);
       });
    }

    res.status(200).json(search(games));
});

router.get('/:id', async (req, res) => {
    const game = await Game.findById(req.params.id);

    res.status(200).json(game);
});

module.exports = router;
