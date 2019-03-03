const express = require('express');
const router = express.Router();
const auth = require('../auth/caregiverAuthentication');
const { Users, FamilyGroup } = require('../database');

// Replace when you have a form
// router.post('/create', auth.caregiverAuthentication, (request, response, next) => {
router.post('/create', (request, response, next) => {
  const { lovedOneName, lovedOnePhoto } = request.body;
  // Change to use request.user
  const userId = request.body.user_id;

  FamilyGroup.create(lovedOneName, lovedOnePhoto)
  .then( ( [familyGroup] ) => {

    Users.updateFamilyGroup( userId , familyGroup.id ) 
    .then( () => {
      response.status(201).redirect(`/home`);

    }).catch((error) => {
      response.status(400).json({
        error_msg: "Unable to update Family Group Id. Please try again. "
      });
    });
  }).catch((error) => {
    response.status(400).json({
      error_msg: "Unable to create Family group. Please try again. "
    });
  });
});

// Hardcoded Due to Hackathon
router.post('/addMedication', (request, response, next) => {
  const familyGroupId = 1;
  const medication = {
    name: request.body.name,
    description: request.body.description,
    directions: request.body.directions,
    expiration: request.body.expiration,
    doctor: request.body.doctor
  };

  FamilyGroup.addMedication( familyGroupId, medication )
    .then( () => {
      response.status(201).send();
    }).catch((error) => {
      console.log(error);
      response.status(400).json({
        error_msg: "Unable to create Family group. Please try again. "
      });
    });
});

module.exports = router;