const db = require('../connection');

// Sequel Query
const CREATE_FAMILY_GROUP =
  `INSERT INTO family_groups ( loved_one_name, loved_one_photo ) ` +
  `VALUES ( $1, $2 ) RETURNING * `;

const create = (lovedOneName, lovedOnePicture) => {
  return db.query(CREATE_FAMILY_GROUP, [
    lovedOneName, lovedOnePicture
  ]);
};
// Export this call to the rest of the application
module.exports = create;