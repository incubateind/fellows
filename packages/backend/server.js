const express = require("express");
const errorHandler = require("./middleware/error");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const dotenv = require("dotenv");
const cors = require("cors");
const hpp = require("hpp");
const fileUpload = require("express-fileupload");
const rateLimit = require("express-rate-limit");
const path = require("path");
const passport = require("passport");
const session = require("express-session");

// load env variables

dotenv.config({ path: "./config/config.env" });

require("dotenv").config();
// Import DB
const connectDB = require("./config/db");
connectDB();
require("colors");

// route files
const auth = require("./api/auth/index");
const community = require("./api/community/index");

const app = express();
// Body Parser

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
app.options("*", cors());

// file Upload
app.use(fileUpload());

// session
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: "=oDaYLZJTCrxq/sKze2T",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

// set static folder
app.use(express.static(path.join(__dirname, "../frontend", "build")))

// Use Routes
app.use('/api/auth', auth);
app.use('/api/community', community);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});

module.exports = app;
