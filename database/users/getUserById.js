// Module used getting user data by id
const db = require('../connection');

const GET_USER_BY_ID = `SELECT * FROM users WHERE id = $1`;

const getUserById = (user_id) => {
  // Query the DB and return results
  return db.oneOrNone(GET_USER_BY_ID, [user_id]);
};

module.exports = getUserById;