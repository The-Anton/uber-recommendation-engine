const express = require('express') 
const eventController = require("./controller.js")
const router = express.Router();
router.get('/media/googlemaps',eventController.getGoogleMapsData);
router.get('/media/serpapi',eventController.getSerpapiData);

// router.get('/test',eventController.testapi);
// router.get('/:key',eventController.getPlaceDetails);



module.exports = router;