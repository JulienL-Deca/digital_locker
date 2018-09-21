'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "data_summaries",
      [
        {
          id:"1cc82b88-d300-4933-a584-d13557fc7193",
          activity_id: "061c6b4c-0461-4cac-a53c-6bbf81a45888",
          distance: 10000,
          duration: 32,
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id:"1cc82b88-d300-4933-a584-d13557fc7435",
          activity_id: "061c6b4c-0461-4cac-a53c-6bbf81a45999",
          distance: 10000,
          duration: 27,
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("data_summaries", null, {});
  }
};
