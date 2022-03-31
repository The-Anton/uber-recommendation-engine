const mongoose = require('mongoose');
const Place = require('./model');
const asyncHandler = require("../../middleware/async");

const axios = require('axios');
const { response } = require('../../server');



const getPlaceDetails = asyncHandler(async (req,res) => {
    let searchQuery = req.query.key
    const query = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${searchQuery}&type=video&key=AIzaSyCPEtuFv56vKRM_Cb2MTSuP3_87Mc20Cuo`;
    const search_google_api = `https://serpapi.com/search.json?q=${searchQuery}&hl=en&gl=us&google_domain=google.com&api_key=f70cce2ec221209bcd45af4533adbbc51c51b682c29251b618061115c6e95d5c`;
    
    res.render('placeDetails', {place: data, reviewData: reviewData[0], googleMapReviews: googleMapReviews});
    // Make a request for a user with a given ID
    // axios.get(search_google_api)
    //       .then((response)=> JSON.stringify(response.data))
    //       .then((data) => res.status(200).send(data))
    //       .catch(function (err) {
    //         console.log("Fetch Error :-S", err);
    //         res.status(500).send({"Internal Server error": err});
    //       });
        
});


const testapi = asyncHandler(async (req,res)=>{
  const apiurl = "https://api.apify.com/v2/actor-tasks/CJOYmG71JGTdSMUim/run-sync-get-dataset-items?token=apify_api_GCs4BlHgxOM7HfOn2XxwgqUoSe1eNZ2MQPGv&memory=2048";

  axios.post(apiurl, {
    "locationFullName": "dighi hills",
    "maxItems": 5,
    "includeAttractions": true,
    "includeRestaurants": false,
    "includeHotels": false,
    "includeTags": false,
    "includeReviews": true,
    "maxReviews": 5,
    "language": "en",
    "currency": "USD",
    "proxyConfiguration": {
      "useApifyProxy": true
    },
    "debugLog": false,
    "foo": "bar",
    "checkInDate": "",
    "lastReviewDate": ""
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
});


const getGoogleMapsData = asyncHandler(async (req,res) => {
  let placeid = req.query.placeid;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&key=AIzaSyCATtupoIdp7bend_fjJmKy52HLRxSz_oA`;
  axios.get(url)
        .then((response)=> {
          res.send(response.data);
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
          res.status(500).send({"Internal Server error": err});
        });
});



const getSerpapiData = asyncHandler(async (req,res) => {
  let query = req.query.query;
  const url = `https://serpapi.com/search.json?q=${query}&hl=en&gl=us&google_domain=google.com&api_key=f70cce2ec221209bcd45af4533adbbc51c51b682c29251b618061115c6e95d5c`;
  axios.get(url)
        .then((response)=> {
          res.send(response.data);
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
          res.status(500).send({"Internal Server error": err});
        });
});



module.exports = {
    getPlaceDetails,
    testapi,
    getGoogleMapsData,
    getSerpapiData
}