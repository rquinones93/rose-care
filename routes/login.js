const express = require('express');
const router = express.Router();
const passport = require('../auth');

router.get('/', (request, response, next) => {
  response.status(200).json({msg: "GET /login"});
});

router.post('/', (request, response, next) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })(request, response, next);
});

module.exports = router;