const db = require('../connection');
const bcrypt = require('bcrypt');

// Sequel Query
const CREATE_USER = 
  `INSERT INTO users ( email, name, password, profile_picture, type, job_title, company, years_experience, certifications ) ` +
  `VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9)`;

const create = ( userData ) => {
  return bcrypt.hash(userData.password, 10).then( ( hash ) => {
    return db.oneOrNone(CREATE_USER, [
      userData.email,
      userData.name,
      hash,
      userData.profile_picture,
      userData.type,
      userData.job_title,
      userData.company,
      userData.years_experience,
      userData.certifications
    ]);
  }).catch( ( error ) => {
    console.log(error);
    return { error_msg: "Error creating new user" };
  });
};
// Export this call to the rest of the application
module.exports = create;