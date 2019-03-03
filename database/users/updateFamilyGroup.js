const db = require('../connection');

// Sequel Query
const UPDATE_FAMILY_GROUP =
  `UPDATE users SET family_group_id = $2 WHERE id = $1`;

const updateFamilyGroup = (userId, familyGroupId) => {
    return db.oneOrNone(UPDATE_FAMILY_GROUP, [
      userId, familyGroupId
    ]);
};
// Export this call to the rest of the application
module.exports = updateFamilyGroup;