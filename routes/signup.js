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
    type: request.body.type,
    job_title: request.body.job_title,
    company: request.body.company,
    years_experience: request.body.years_experience,
    certifications: request.body.certifications
  };

  Users.create( user_data ).then( ( error ) => {
    if( error ) {
      response.status(406).json(error);
    }

    request.flash('success_msg', 'You have successfully created an account!');
    response.status(201).redirect('/login');
    
  }).catch( (error) => { console.log(error); response.status(400).json({ error_msg: "Unable to complete Sign Up. Please try again. "}) });
});

module.exports = router;