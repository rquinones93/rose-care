const express = require('express');
const path = require('path');
const expressValidator = require('express-validator');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
// Make use of environment variables defined in .env
require('dotenv').config();

// Declare Express App
const app = express();

// Log Requests to Console
app.use(logger('dev'));

// Get and properly parse data from Front End
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.enable('trust proxy');
app.use(
  session({
    store: new(require('connect-pg-simple')(session))(),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: app.get('env') != 'development'
    }
  })
);

// Passport Initialize
app.use(passport.initialize());
app.use(passport.session());
app.use((request, response, next) => {
  response.locals.isAuthenticated = request.isAuthenticated();
  next();
});

// Express Validator - Taken from Middleware Options on Github
app.use(
  expressValidator({
    errorFormatter: function (param, msg, value) {
      let namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }

      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// Routers
const index = require('./routes/index');
const signup = require('./routes/signup');
const login = require('./routes/login');
const logout = require('./routes/logout');

app.use('/', index);
app.use('/signup', signup);
app.use('/login', login);
app.use('/logout', logout);

module.exports = app;