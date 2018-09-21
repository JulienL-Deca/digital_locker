'use strict';
module.exports = (sequelize, DataTypes) => {
  var activities = sequelize.define('activities', {
    name: DataTypes.STRING,
    sport: DataTypes.STRING,
    user_id: DataTypes.UUID,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    elevation: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    comment: DataTypes.TEXT,
    thumbnail: DataTypes.STRING,
    tag: DataTypes.STRING,
    weather: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    humidity: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  activities.associate = function(models) {
    activities.belongsTo(models.users);
    activities.belongsTo(models.data_summaries);
    activities.belongsToMany(models.products, { through: models.activity_products});
  };
  return activities;
};
