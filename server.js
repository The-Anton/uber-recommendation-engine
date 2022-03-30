const express = require('express');
const errorHandler = require('./middleware/error');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const dotenv = require('dotenv')
const cors = require('cors');
const hpp = require('hpp');
const fileUpload = require('express-fileupload');
const rateLimit = require('express-rate-limit');
const path = require('path');


const mongoose              =  require("mongoose"),
      passport              =  require("passport"),
      bodyParser            =  require("body-parser"),
      LocalStrategy         =  require("passport-local"),
      passportLocalMongoose =  require("passport-local-mongoose"),
      User                  =  require("./auth/model");


// load env variables


dotenv.config({path:'./config/config.env'})

require('dotenv').config();
// Import DB
const connectDB = require('./config/db');
connectDB();
require('colors');

// route files

const app = express();

const place = require('./api/place/index.js');
const nearby = require('./api/nearby/index.js');
const auth = require('./auth/index.js');

app.use(require("express-session")({
  secret:"Any normal Word",       //decode or encode session
  resave: false,          
  saveUninitialized:false    
}));
passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));

app.use(express.json());
// sanitize Data

app.use(mongoSanitize());

// xss-clean

app.use(xss());
// Rate Limit

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 10000, // limit each IP to 1000 requests per windowMs
});
app.use(limiter);
// hpp

app.use(hpp());
// cors

app.use(cors());

app.options('*', cors());


// Use Routes
app.use('/api/place', place);
app.use('/api/nearby', nearby);
app.use('/auth', auth);
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded(
  { extended:true }
))
app.use(passport.initialize());
app.use(passport.session());

// index page
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/desktop', function(req, res) {
  res.render('desktop/home');
});

app.get('/booking', function(req, res) {
  res.render('booking');
});

app.get('/nextspot', function(req, res) {
  res.render('nextspot');
});




app.get('/desktop/booking', function(req, res) {
  res.render('desktop/booking');
});

app.get('/desktop/nextspot', function(req, res) {
  res.render('desktop/nextspot');
});

app.get('/multiroute', function(req, res) {

  // var placesString = req.query.places.split('|');

  // var places = placesString.map((place)=>{
  //   let placeName = place.split('^')[0];
  //   let placeId = place.split('^')[1];

  //   return {"name": placeName, "place_id": placeId}
  // })

  // console.log(places);
  res.render('multiroute', {places: req.query.places});
});

app.get('/desktop/multiroute', function(req, res) {

  res.render('desktop/multiroute', {places: req.query.places});
});
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});


module.exports = app;
