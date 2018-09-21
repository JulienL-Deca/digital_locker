'use strict';
module.exports = (sequelize, DataTypes) => {
  var gears = sequelize.define('gears', {
    product_id: DataTypes.UUID,
    lifetime_progress: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
    usable: DataTypes.BOOLEAN,
    user_id: DataTypes.UUID
  }, {
    underscored: true,
  });
  gears.associate = function(models) {
    gears.belongsTo(models.users);
    gears.hasMany(models.feedbacks);
    gears.belongsTo(models.products);

    // associations can be defined here
  };
  return gears;
};
