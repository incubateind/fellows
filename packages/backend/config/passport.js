const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const chalk = require("chalk");
let user = {};

exports.serializeUser = (user, cb) => {
  cb(null, user);
};

exports.deserializeUser = (user, cb) => {
  cb(null, user);
};

//Github Stratergy
exports.githubStrategy = new GithubStrategy(
  {
    clientID: process.env.GITHUB_clientID,
    clientSecret: process.env.GITHUB_clientSecret,
    callbackURL: "/auth/github/callback",
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.yellow(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
  }
);

// Google Strategy
exports.googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_clientID,
    clientSecret: process.env.GOOGLE_clientSecret,
    callbackURL: "/auth/google/callback",
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.red(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
  }
);
//Linkedin Stratergy

exports.linkedinStrategy = new LinkedInStrategy(
  {
    clientID: process.env.LINKEDIN_clientID,
    clientSecret: process.env.LINKEDIN_clientSecret,
    callbackURL: "/auth/linkedin/callback",
    scope: ["r_emailaddress", "r_liteprofile"],
    passReqToCallback: true,
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
  }
);
