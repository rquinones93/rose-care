// Serve the index page
const express = require('express');
const router = express.Router();
const { Users }  = require('../database');

router.post('/', (request, response, next) => {
  const user_data = {
    email: request.body.email,
    name: request.body.name,
    password: request.body.password,
    profile_picture: request.body.profile_picture,
    type: request.body.type
  };

  Users.create( user_data ).then( ( result ) => {
    if( user_data.type == "Caregiver" ) {
      const caregiver_data = {
        job_title: request.body.job_title,
        years_experience: request.body.years_experience,
        certifications: JSON.stringify(request.body.certifications)
      };

      Caregiver.create( caregiver_data ).then().catch();
    }

    response.status(200).send();
  }).catch( (error) => { console.log(error); response.status(400).json({ error_msg: "Unable to complete Sign Up. Please try again. "}) });
});

module.exports = router;