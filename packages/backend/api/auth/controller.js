
const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../../config/passport");
const logout = require("express-passport-logout");

passport.use(auth.githubStrategy);
passport.use(auth.linkedinStrategy);
passport.use(auth.googleStrategy);

passport.deserializeUser(auth.deserializeUser);
passport.serializeUser(auth.serializeUser);

//Github
const authGithub = passport.authenticate("github");

//Google
const authGoogle = passport.authenticate("google", {
    scope: ["profile", "email"],
});

const authGoogleCallback = passport.authenticate("google");

//linkedin
const authLinkedin = passport.authenticate("linkedin");

//userinfo
const redirect = (req, res) => {
  res.redirect(301, "http://localhost:3000/");
};

const profile =  (req, res) => {
  //res.send(user);
  res.send("User Data");
};

const userInfo = (req, res) => {
  console.log("getting user data!");
};

const authLogout =  (req, res) => {
  logout();
  console.log("logging out!");
  user = {};
  res.redirect(301, "http://localhost:3000/");
};


module.exports = {
  authGithub,
  authGoogle,
  authGoogleCallback,
  authLinkedin,
  authLogout,
  userInfo,
  redirect,
  profile
};
