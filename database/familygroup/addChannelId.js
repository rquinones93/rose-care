const db = require('../connection');

// Sequel Query
const ADD_CHANNEL_ID =
  `UPDATE family_groups SET channelId= $2 WHERE id = $1`;

const addMedication = (familyGroupId, channelId) => {
  return db.none(ADD_MEDICATION, [
    familyGroupId, channelId
  ]);
};
// Export this call to the rest of the application
module.exports = addMedication;