'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
      .then(() =>
        queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("gen_random_uuid()")
        },
        geonaute_id: {
          type: Sequelize.INTEGER
        },
        first_name: {
          type: Sequelize.STRING
        },
        lastname: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        age: {
          type: Sequelize.INTEGER
        },
        country: {
          type: Sequelize.STRING
        },
        language: {
          type: Sequelize.STRING
        },
        weight: {
          type: Sequelize.INTEGER
        },
        size: {
          type: Sequelize.INTEGER
        },
        image_url: {
          type: Sequelize.STRING
        },
        token: {
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
    return queryInterface.dropTable('users');
  }
};
