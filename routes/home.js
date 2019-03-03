const express = require('express');
const router = express.Router();
const passport = require('../auth');

router.get('/', (request, response, next) => {
  response.status(200).json({ msg: "Logged in"});
});