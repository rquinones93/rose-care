'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      family_group_id: 1,
      name: "Debbie Leone",
      message: "Took Deborah to her Kaiser appointment today, everything went well!"
    }, {
      family_group_id: 1,
      name: "Debbie Leone",
      message: "Deborah was amazing at physical therapy today!"

    }, {
      family_group_id: 1,
      name: "Debbie Leone",
      message: "Picked up the new medication for the pharmacy."

    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('posts', null, {});
  }
};
