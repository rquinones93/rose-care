const express = require('express');
const router = express.Router();
const passport = require('../auth');

router.get('/', (request, response, next) => {
  response.render('index', {
  title: 'Home'
  });
});

router.get('/:familyId', (request, response, next) => {
  response.render('index', {
    title: 'Home'
  });
});