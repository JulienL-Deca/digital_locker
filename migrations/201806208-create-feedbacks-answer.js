'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
      .then(() =>
        queryInterface.createTable('feedbacks_answers', {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("gen_random_uuid()")
        },
        feedback_id: {
          type: Sequelize.UUID,
          // references: { model: 'feedbacks', key: 'id' },
        },
        content: {
          type: Sequelize.TEXT
        },
        decathlon_members_id: {
          type: Sequelize.UUID,
          references: { model: 'decathlon_members', key: 'id' }
        },
        parent_id: {
          type: Sequelize.UUID,
          references: { model: 'feedbacks_answers', key: 'id' }
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
    return queryInterface.dropTable('feedbacks_answers');
  }
};
