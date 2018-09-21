'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    geonaute_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    country: DataTypes.STRING,
    language: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    underscored: true,
  });
  users.associate = function(models) {
    users.hasMany(models.activities);
    users.hasMany(models.gears);
    // associations can be defined here
  };
  return users;
};
