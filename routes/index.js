// Serve the index page
const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('index',  { title : 'Home' }  );
});

router.get('/login', (request, response, next) => {
  response.render('login', {title:'Rose Care Login'});
});

module.exports = router;