const db = require('../connection');

// Sequel Query
const ADD_MEDICATION =
 `INSERT INTO medications ( family_group_id, name, description, directions, expiration, doctor ) ` +
 `VALUES ( $1, $2, $3, $4, $5, $6 )`;

const addMedication = (familyGroupId, medication) => {
  return db.none(ADD_MEDICATION, [
    familyGroupId, 
    medication.name,
    medication.description,
    medication.directions,
    medication.expiration,
    medication.doctor
  ]);
};
// Export this call to the rest of the application
module.exports = addMedication;