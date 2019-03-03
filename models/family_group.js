'use strict';
module.exports = (sequelize, DataTypes) => {
  const family_group = sequelize.define('family_group', {
    loved_one_name: DataTypes.STRING,
    loved_one_photo: DataTypes.STRING,
    medication: DataTypes.JSON,
    notes: DataTypes.ARRAY
  }, {});
  family_group.associate = function(models) {
    // associations can be defined here
  };
  return family_group;
};