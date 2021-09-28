const express = require('express');
const router = express.Router();
const leaderboardController = require('./controller.js')

router.get("/rank*", leaderboardController.getRanking);

module.exports = router;

