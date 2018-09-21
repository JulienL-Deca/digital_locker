'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
      .then(() =>
        queryInterface.createTable('activity_products', {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("gen_random_uuid()")
        },
        activity_id: {
          type: Sequelize.UUID,
          references: { model: 'activities', key: 'id' },
        },
        product_id: {
          type: Sequelize.UUID
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
    return queryInterface.dropTable('activity_products');
  }
};
