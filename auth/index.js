const express = require('express') 
const authController = require("./controller.js")
const router = express.Router();
const mongoose              =  require("mongoose"),
      passport              =  require("passport"),
      bodyParser            =  require("body-parser"),
      LocalStrategy         =  require("passport-local"),
      passportLocalMongoose =  require("passport-local-mongoose");

router.get("/userprofile",authController.isLoggedIn ,authController.getUserProfile)

//Auth Routes
router.get("/login", authController.getLoginPage);
router.post("/login",passport.authenticate("local",{
    successRedirect:"/userprofile",
    failureRedirect:"/login"
}),function (req, res){
});
router.get("/register", authController.getRegisterPage);
router.post("/register", authController.postRegister)
router.get("/logout", authController.logOut);

module.exports = router;