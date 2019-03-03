'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    family_group_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};