'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('family_groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loved_one_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      loved_one_photo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      medication: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
      },
      notes: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      channelId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('family_groups');
  }
};