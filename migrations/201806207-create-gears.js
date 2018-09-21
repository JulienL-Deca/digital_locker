'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
      .then(() =>
        queryInterface.createTable('gears', {
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
        lifetime_progress: {
          type: Sequelize.INTEGER
        },
        purchase_date: {
          type: Sequelize.DATE
        },
        usable: {
          type: Sequelize.BOOLEAN
        },
        user_id: {
          type: Sequelize.UUID,
          references: { model: 'users', key: 'id' },
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
    return queryInterface.dropTable('gears');
  }
};
