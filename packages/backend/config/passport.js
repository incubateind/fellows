const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const User = require('../../backend/api/auth/model')
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
  async (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.yellow(JSON.stringify(profile)));
    console.log(chalk.red(JSON.stringify(profile)));

    const newUser = {
      googleId: profile.id,
      displayName: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos[0].value,
      provider: "github"
    }

    let storedUser = await User.findOne({googleId: profile.id});
    if(!storedUser){
      tmp = await User.create(newUser);
      console.log(tmp);
      user = tmp;
    }

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
  async (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.red(JSON.stringify(profile)));

    const newUser = {
      googleId: profile.id,
      displayName: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos[0].value,
      provider: "google"
    }

    let storedUser = await User.findOne({googleId: profile.id});
    if(!storedUser){
      tmp = await User.create(newUser);
      console.log(tmp);
      user = tmp;
    }

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
  async (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));

    const newUser = {
      googleId: profile.id,
      displayName: profile.displayName,
      email: profile.emails,
      photo: profile.photo,
      provider: "linkedin"
    }

    let storedUser = await User.findOne({googleId: profile.id});
    if(!storedUser){
      tmp = await User.create(newUser);
      console.log(tmp);
      user = tmp;
    }

    return cb(null, profile);
  }
);
