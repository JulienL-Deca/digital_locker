'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
      .then(() =>
        queryInterface.createTable('advices', {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("gen_random_uuid()")
        },
        product_id: {
          type: Sequelize.UUID,
          references: { model: 'products', key: 'id' },
        },
        content: {
          type: Sequelize.TEXT
        },
        pictures: {
          type: Sequelize.STRING
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
    return queryInterface.dropTable('advices');
  }
};
