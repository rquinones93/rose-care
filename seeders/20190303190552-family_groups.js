'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('family_groups', [{
      loved_one_name: "Deborah Dee",
      loved_one_photo: "noexisting.png",
      notes: [ "Make sure she always uses her walker", "Remember to check she swalloed her pills" ],
      channelId: "testtest"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('family_groups', null, {});
  }
};
