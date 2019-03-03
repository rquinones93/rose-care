// Serve the index page
const express = require('express');
const router = express.Router();

// twilio


router.get('/', (request, response, next) => {

	

  response.render('index'  );
});

router.get('/login', (request, response, next) => {
  response.render('login', {title:'Rose Care Login'});
});

module.exports = router;