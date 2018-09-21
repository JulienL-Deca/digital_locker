'use strict';
module.exports = (sequelize, DataTypes) => {
  var data_summaries = sequelize.define('data_summaries', {
    activity_id: DataTypes.UUID,
    distance: DataTypes.INTEGER,
    duration: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  data_summaries.associate = function(models) {
    data_summaries.belongsTo(models.activities);
    // associations can be defined here
  };
  return data_summaries;
};
