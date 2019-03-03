const db = require('../connection');

// Sequel Query
const GET_CHANNEL_ID =
  `SELECT channelId FROM family_groups WHERE id = $1`;

const getChannelId = (familyGroupId) => {
  return db.many(GET_CHANNEL_ID, [
    familyGroupId
  ]);
};
// Export this call to the rest of the application
module.exports = getChannelId;