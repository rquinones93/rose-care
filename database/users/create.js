const db = require('../connection');
const bcrypt = require('bcrypt');

// Sequel Query
const CREATE_USER = 
  `INSERT INTO users ( email, name, password, profile_picture, type ) ` +
  `VALUES ( $1, $2, $3, $4, $5) ` +
  `RETURNING id`;

const create = ( user_data ) => {
  return bcrypt.hash(user_data.password, 10).then( ( hash ) => {
    return db.one(CREATE_USER, [
      user_data.email,
      user_data.name,
      hash,
      user_data.profile_picture,
      user_data.type
    ]);
  }).catch( ( error ) => {
    return { error_msg: "Error creating new user" };
  });
};
// Export this call to the rest of the application
module.exports = create;