const express = require('express');
const expressValidator = require('express-validator');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
// const passport = require('passport');
// const session = require('express-session');
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

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

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

// app.get('/', function (req, res) {
//   res.render('index',
//   { title : 'Home' }
//   )
// })

// Routers
const index = require('./routes/index');

app.use('/', index);
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;