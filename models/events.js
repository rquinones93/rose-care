'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    family_group_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date_of_event: DataTypes.STRING
  }, {});
  events.associate = function(models) {
    // associations can be defined here
  };
  return events;
};