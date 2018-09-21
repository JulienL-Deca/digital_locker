'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    decathlon_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image_path: DataTypes.STRING,
    decathlon_members_id: DataTypes.UUID,
    lifetime_max: DataTypes.INTEGER,
    product_owner_message: DataTypes.TEXT,
    nb_users: DataTypes.INTEGER,
    percent_male: DataTypes.INTEGER,
    percent_female: DataTypes.INTEGER,
    dur_max: DataTypes.STRING,
    dur_avr: DataTypes.STRING,
    dur_min: DataTypes.STRING,
    age_18_25: DataTypes.INTEGER,
    age_26_45: DataTypes.INTEGER,
    age_46_55: DataTypes.INTEGER,
    age_56: DataTypes.INTEGER,
    dist_max: DataTypes.STRING,
    dist_avr: DataTypes.STRING,
    dist_min: DataTypes.STRING,
    weight_50: DataTypes.INTEGER,
    weight_51_70: DataTypes.INTEGER,
    weight_71_90: DataTypes.INTEGER,
    weight_91: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  products.associate = function(models) {
    products.belongsTo(models.gears);
    products.belongsTo(models.decathlon_members);
    products.belongsToMany(models.activities, { through: models.activity_products});
    products.hasMany(models.advices);
    // associations can be defined here
  };
  return products;
};
