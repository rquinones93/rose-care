const db = require('../connection');

// Sequel Query
const GET_NOTES_BY_ID =
  `SELECT notes FROM family_groups WHERE id = $1`;

const getNotesById = (familyGroupId) => {
  return db.oneOrNone(GET_NOTES_BY_ID, [
    familyGroupId
  ]);
};
// Export this call to the rest of the application
module.exports = getNotesById;