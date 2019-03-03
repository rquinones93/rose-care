'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [{
      family_group_id: 1,
      description: "Doctor's appointment at Kaiser @ 10AM",
      date_of_event: "03-03-2019"
    }, {
      family_group_id: 1,
      description: "Physical Therapy appointment @ 1PM",
      date_of_event: "03-03-2019"
    }, {
      family_group_id: 1,
      description: "Pick up new perscriptions at the pharmacy",
      date_of_event: "03-03-2019"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('events', null, {});
  }
};
