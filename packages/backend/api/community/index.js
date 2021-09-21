const express = require('express');
const router = express.Router();
const communityController = require('./controller.js')

//router.get("/:id", communityController.getEvent);
router.get("/all*", communityController.getAllCommunity);
//router.get("/:id", communityController.getEvent);
//router.get("/:id", communityController.getEvent);

module.exports = router;

