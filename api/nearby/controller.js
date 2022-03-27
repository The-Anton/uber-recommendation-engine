const mongoose = require('mongoose');
const asyncHandler = require("../../middleware/async");

const axios = require('axios');

const getNearbyPlaces = asyncHandler(async (req,res) => {
    let searchQuery = req.query
    let latitude = searchQuery.latitude;
    let longitude = searchQuery.longitude;
    let range = searchQuery.range;

    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${range}&key=AIzaSyCATtupoIdp7bend_fjJmKy52HLRxSz_oA`,
      headers: { }
    };

    await axios(config)
    .then((response) => {
       res.send(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send(error);
    });
        
})

const getNearbyRecommendation = asyncHandler(async (req,res) => {
  let searchQuery = req.query
  let latitude = searchQuery.latitude;
  let longitude = searchQuery.longitude;
  let range = searchQuery.range;

  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${range}&key=AIzaSyCATtupoIdp7bend_fjJmKy52HLRxSz_oA`,
    headers: { }
  };

  await axios(config)
  .then((response) => {
     res.send(response.data.results);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).send(error);
  });
      
})


module.exports = {
  getNearbyPlaces,
}