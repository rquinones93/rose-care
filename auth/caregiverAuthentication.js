// User must be a caregiver in order to do specific functions
const { Users } = require('../database');

const caregiverAuthentication = ( request, response, next ) => {
  console.log(request);
  if( request.isAuthenticated() ) {
    Users.getUserById(request.user.id)
    .then( (user) => {
      if( user.type == "Professional Caregiver") {
        return next();
      }

      //request.flash('error', 'Only Professional Caregivers are allowed to do that.');
      response.redirect('/home');

    }).catch( (error) => {
      console.log(error); 
      response.status(400).json(error);
    });

  } else {
    // User is not logged in
    // We need to set up flash messaging
    // request.flash('error', 'You must login to access this page');
    response.redirect('/login');
  }
};

module.exports = {
  caregiverAuthentication: caregiverAuthentication
};