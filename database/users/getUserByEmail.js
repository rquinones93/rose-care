// Module used getting user data by their email
const db = require('../connection');

const GET_USER_BY_EMAIL = `SELECT * FROM users WHERE email = $1`;

const getUserByEmail = (email) => {
  // Query the DB and return results
  return db.oneOrNone(GET_USER_BY_EMAIL, [email]);
};

module.exports = getUserByEmail;