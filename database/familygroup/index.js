// Export Family Group Queries to the rest of the application
module.exports = {
  create: require('./create'),
  getMedicationsById: require('./getMedicationsById'),
  addMedication: require('./addMedication')
};