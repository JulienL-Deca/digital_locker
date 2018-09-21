'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
      .then(() =>
        queryInterface.createTable('activities', {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("gen_random_uuid()")
        },
        name: {
          type: Sequelize.STRING
        },
        sport: {
          type: Sequelize.STRING
        },
        user_id: {
          type: Sequelize.UUID,
          references: { model: 'users', key: 'id' },
        },
        start_date: {
          type: Sequelize.DATE
        },
        end_date: {
          type: Sequelize.DATE
        },
        duration: {
          type: Sequelize.INTEGER
        },
        distance: {
          type: Sequelize.INTEGER
        },
        elevation: {
          type: Sequelize.INTEGER
        },
        latitude: {
          type: Sequelize.FLOAT
        },
        longitude: {
          type: Sequelize.FLOAT
        },
        comment: {
          type: Sequelize.TEXT
        },
        thumbnail: {
          type: Sequelize.STRING
        },
        tag: {
          type: Sequelize.STRING
        },
        weather: {
          type: Sequelize.STRING
        },
        temperature: {
          type: Sequelize.INTEGER
        },
        humidity: {
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
    return queryInterface.dropTable('activities');
  }
};
