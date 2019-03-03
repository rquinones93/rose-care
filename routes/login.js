const express = require('express');
const router = express.Router();
const passport = require('../auth');

router.get('/', (request, response, next) => {
  response.render('login', {
    title: 'Rose Care Login'
  });
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

module.exports = router;