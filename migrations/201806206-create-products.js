'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
      .then(() =>
        queryInterface.createTable('products', {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("gen_random_uuid()")
        },
        decathlon_id: {
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        image_path: {
          type: Sequelize.STRING
        },
        decathlon_members_id: {
          type: Sequelize.UUID,
          references: { model: 'decathlon_members', key: 'id' },
        },
        lifetime_max: {
          type: Sequelize.INTEGER
        },
        product_owner_message: {
          type: Sequelize.TEXT
        },
        nb_users: {
          type: Sequelize.INTEGER
        },
        percent_male: {
          type: Sequelize.INTEGER
        },
        percent_female: {
          type: Sequelize.INTEGER
        },
        dur_max: {
          type: Sequelize.STRING
        },
        dur_avr: {
          type: Sequelize.STRING
        },
        dur_min: {
          type: Sequelize.STRING
        },
        age_18_25: {
          type: Sequelize.INTEGER
        },
        age_26_45: {
          type: Sequelize.INTEGER
        },
        age_46_55: {
          type: Sequelize.INTEGER
        },
        age_56: {
          type: Sequelize.INTEGER
        },
        dist_max: {
          type: Sequelize.STRING
        },
        dist_avr: {
          type: Sequelize.STRING
        },
        dist_min: {
          type: Sequelize.STRING
        },
        weight_50: {
          type: Sequelize.INTEGER
        },
        weight_51_70: {
          type: Sequelize.INTEGER
        },
        weight_71_90: {
          type: Sequelize.INTEGER
        },
        weight_91: {
          type: Sequelize.INTEGER
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
