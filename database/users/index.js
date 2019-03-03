// Export User Queries to the rest of the application
module.exports = {
  create: require('./create'),
  getUserById: require('./getUserById'),
  getUserByEmail: require('./getUserByEmail'),
  updateFamilyGroup: require('./updateFamilyGroup')
};