'use strict';
module.exports = (sequelize, DataTypes) => {
  var activity_products = sequelize.define('activity_products', {
    activity_id: DataTypes.UUID,
    product_id: DataTypes.UUID
  }, {
    underscored: true,
  });
  activity_products.associate = function(models) {
    // activity_products.belongsToMany(models.activity_products, { through: models.activities});
    // activity_products.belongsToMany(models.activity_products, { through: models.products});

    // associations can be defined here
  };
  return activity_products;
};
