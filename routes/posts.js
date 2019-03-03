const express = require('express');
const router = express.Router();
const auth = require('../auth/caregiverAuthentication');
const { Posts } = require('../database');

// Testing
router.get('/', (request, response, next) => {
  Posts.getPostsByFamilyGroupId(1)
    .then( (posts) => {
      console.log(posts);
      response.status(200).send();
    }).catch((error) => {
      response.status(400).json({
        error_msg: "Unable to update Family Group Id. Please try again. "
      });
    });
});

module.exports = router;