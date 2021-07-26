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

router.get("/auth/github", passport.authenticate("github"));
router.get(
  "/auth/github/callback",
  passport.authenticate("github"),
  (req, res) => {
    res.redirect(301, "http://localhost:3000/");
  }
);
router.get("/profile", (req, res) => {
  res.send(user);
});

//Google
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect(301, "http://localhost:3000/");
  }
);
//linkedin

router.get("/auth/linkedin", passport.authenticate("linkedin"));

router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin"),
  (req, res) => {
    res.redirect(301, "http://localhost:3000/");
  }
);

//userinfo
router.get("/user", (req, res) => {
  console.log("getting user data!");
});

router.get("/auth/logout", (req, res) => {
  logout();
  console.log("logging out!");
  user = {};
  res.redirect(301, "http://localhost:3000/");
});
module.exports = router;
