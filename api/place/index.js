const express = require('express') 
const eventController = require("./controller.js")
const router = express.Router();

router.get('/:key',eventController.getPlaceDetails);

module.exports = router;