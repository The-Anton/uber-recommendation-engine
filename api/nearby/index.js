const express = require('express') 
const eventController = require("./controller.js")
const router = express.Router();

router.get('/query',eventController.getNearbyRecommendation);

module.exports = router;