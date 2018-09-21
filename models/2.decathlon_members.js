'use strict';
module.exports = (sequelize, DataTypes) => {
  var decathlon_members = sequelize.define('decathlon_members', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    sport: DataTypes.STRING,
    job_title: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    underscored: true,
  });
  decathlon_members.associate = function(models) {
    decathlon_members.hasMany(models.products);
    decathlon_members.hasMany(models.feedbacks_answer);
    // associations can be defined here
  };
  return decathlon_members;
};
