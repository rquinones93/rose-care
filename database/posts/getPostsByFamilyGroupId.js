const db = require('../connection');

// Sequel Query
const GET_POSTS_BY_ID =
  `SELECT * FROM posts WHERE family_group_id = $1`;

const getPostsByFamilyGroupId = (familyGroupId) => {
  return db.many(GET_POSTS_BY_ID, [
    familyGroupId
  ]);
};
// Export this call to the rest of the application
module.exports = getPostsByFamilyGroupId;