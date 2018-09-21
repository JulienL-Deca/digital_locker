'use strict';
module.exports = (sequelize, DataTypes) => {
  var feedbacks = sequelize.define('feedbacks', {
    gear_id: DataTypes.UUID,
    content: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {
    underscored: true,
  });
  feedbacks.associate = function(models) {
    feedbacks.hasMany(models.feedbacks_answer);
    feedbacks.belongsTo(models.gears);
    // associations can be defined here
  };
  return feedbacks;
};
