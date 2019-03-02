// Serve the index page
const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {

  response.status(200).json({ msg: "Hello World"});
});

module.exports = router;