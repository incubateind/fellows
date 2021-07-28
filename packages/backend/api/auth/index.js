const express = require("express");
const router = express.Router();
const authController = require('./controller.js');
const logout = require("express-passport-logout");
const passport = require("passport");
const auth = require("../../config/passport");

passport.use(auth.githubStrategy);
passport.use(auth.linkedinStrategy);
passport.use(auth.googleStrategy);

passport.deserializeUser(auth.deserializeUser);
passport.serializeUser(auth.serializeUser);

//Github
router.get("/auth/github", authController.authGithub);
router.get("/auth/github/callback",   authController.authGithub, authController.redirect);
router.get("/profile", authController.profile);

//Google
router.get("/auth/google", authController.authGoogle);
router.get("/auth/google/callback", authController.authGoogleCallback, authController.redirect);

//linkedin
router.get("/auth/linkedin", authController.authLinkedin);
router.get("/auth/linkedin/callback", authController.authLinkedin, authController.redirect);

//userinfo
router.get("/user", authController.userInfo);

//logout
router.get("/auth/logout", authController.authLogout);

module.exports = router;
