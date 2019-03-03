'use strict';
module.exports = (sequelize, DataTypes) => {
  const medications = sequelize.define('medications', {
    family_group_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    directions: DataTypes.STRING,
    expiration: DataTypes.STRING,
    doctor: DataTypes.STRING
  }, {});
  medications.associate = function(models) {
    // associations can be defined here
  };
  return medications;
};