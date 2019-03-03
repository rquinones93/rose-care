const db = require('../connection');

// Sequel Query
const GET_MEDICATIONS_BY_ID =
  `SELECT * FROM medications WHERE family_group_id = $1`;

const getMedicationsById = (familyGroupId) => {
  return db.many(GET_MEDICATIONS_BY_ID, [
    familyGroupId
  ]);
};
// Export this call to the rest of the application
module.exports = getMedicationsById;