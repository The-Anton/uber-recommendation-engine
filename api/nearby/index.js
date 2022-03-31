const express = require('express') 
const eventController = require("./controller.js")
const router = express.Router();

router.get('/query/placeId',eventController.getNearbyRecommendationByPlaceID);
router.get('/query/location',eventController.getNearbyRecommendationByPlaceLocation);

module.exports = router;