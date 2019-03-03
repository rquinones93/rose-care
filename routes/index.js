// Serve the index page
const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('index',  { title : 'Home' }  );
});

module.exports = router;