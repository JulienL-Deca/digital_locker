'use strict';
module.exports = (sequelize, DataTypes) => {
  var advices = sequelize.define('advices', {
    product_id: DataTypes.UUID,
    content: DataTypes.TEXT,
    pictures: DataTypes.STRING
  }, {
    underscored: true,
  });
  advices.associate = function(models) {
    advices.hasMany(models.products);
    // associations can be defined here
  };
  return advices;
};
