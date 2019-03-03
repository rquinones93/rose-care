const db = require('../connection');

// Sequel Query
const GET_EVENTS_BY_ID =
  `SELECT * FROM events WHERE family_group_id = $1`;

const getEventsById = (familyGroupId) => {
  return db.many(GET_EVENTS_BY_ID, [
    familyGroupId
  ]);
};
// Export this call to the rest of the application
module.exports = getEventsById;