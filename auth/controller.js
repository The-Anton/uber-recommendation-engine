
const mongoose = require('mongoose');
const asyncHandler = require("../middleware/async");
const User = require("./model")

const getLoginPage = asyncHandler((req, res)=>{
    res.render("login");
});

const getUserProfile = asyncHandler((req, res)=>{
    res.render("userprofile");
});

const getRegisterPage = asyncHandler((req, res)=>{
    res.render("signup");
});

const postRegister= asyncHandler((req, res)=>{
    User.register(new User({username: req.body.username,phone:req.body.phone,telephone: req.body.telephone}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.render("register");
        }
    passport.authenticate("local")(req,res,function(){
        res.redirect("/login");
    })    
    })
});

const logOut = asyncHandler((req, res)=>{
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = {
    getLoginPage,
    getUserProfile,
    getRegisterPage,
    postRegister,
    logOut,
    isLoggedIn
}