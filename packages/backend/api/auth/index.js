const express = require("express");
const router = express.Router();
const authController = require("./controller.js");
const logout = require("express-passport-logout");
const passport = require("passport");
const auth = require("../../config/passport");

passport.use(auth.githubStrategy);
passport.use(auth.linkedinStrategy);
passport.use(auth.googleStrategy);

passport.deserializeUser(auth.deserializeUser);
passport.serializeUser(auth.serializeUser);

//Github
router.get("/github", authController.authGithub);
router.get(
  "/github/callback",
  authController.authGithub,
  authController.redirect
);

//Google
router.get("/google", authController.authGoogle);
router.get(
  "/google/callback",
  authController.authGoogleCallback,
  authController.redirect
);

//linkedin
router.get("/linkedin", authController.authLinkedin);
router.get(
  "/linkedin/callback",
  authController.authLinkedin,
  authController.redirect
);

//userinfo
router.get("/user", authController.userInfo);

//logout
router.get("/auth/logout", authController.authLogout, authController.redirect);

module.exports = router;
