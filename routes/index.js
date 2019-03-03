// Serve the index page
const express = require('express');
const router = express.Router();
const { FamilyGroup, Posts } = require('../database');

router.get('/', (request, response, next) => {
  Promise.all([FamilyGroup.getMedicationsById(1), FamilyGroup.getNotesById(1),
      FamilyGroup.getEventsById(1), Posts.getPostsByFamilyGroupId(1)
    ])
    .then(([medications, notes, events, posts]) => {
      console.log(medications, notes, events, posts);
      response.render('home', {
        title: 'Rose Care - Home',
        medications: medications,
        notes: notes,
        events: events,
        posts: posts
      });
    }).catch((error) => {
      console.log(error);
      response.status(400).json(error);
    });
});

module.exports = router;