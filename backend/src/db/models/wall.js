'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wall = sequelize.define('Wall', {
    name: DataTypes.STRING
  }, {});
  // Each wall can have many posts
  Wall.associate = function (models) {
    Wall.hasMany(models.Post);
  };
  return Wall;
};