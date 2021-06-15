var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");
var helmet = require("helmet");
// E N V variable
require("dotenv").config();
// Express mongo session storage
var MongoDBStore = require("connect-mongodb-session")(session);

var Users = require("./models/users");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Conenct to DB
let databaseUrl = `mongodb://localhost:27017/${process.env.DB_HOST}`;

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ==================================
var db = mongoose.connection;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
// master

// BodyParser Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// =================== Express Session ========================
var store = new MongoDBStore({
  uri: databaseUrl,
  collection: "mySessions",
});

// Catch errors
store.on("error", function (error) {
  console.log(error);
});

let secrete = process.env.SECRETE;

app.use(
  session({
    secret: secrete,
    store: store,
    saveUninitialized: false,
    resave: false,
    unset: "destroy",
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
