// Export Family Group Queries to the rest of the application
module.exports = {
  create: require('./create'),
  getMedicationsById: require('./getMedicationsById'),
  addMedication: require('./addMedication'),
  getChannelId: require('./getChannelId'),
  addChannelId: require('./addChannelId'),
  getNotesById: require('./getNotesById'),
  getEventsById: require('./getEventsById')
};