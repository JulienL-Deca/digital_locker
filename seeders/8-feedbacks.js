'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "feedbacks",
      [
        {
          id:"e9036557-d06a-4abc-9544-bfa310df1ad2",
          gear_id:"26c52ad0-1ebc-44f6-87d5-71cd908fa7e8",
          content:"problème au niveau du laçage, il manque un oeillet",
          date:"NOW()",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("feedbacks", null, {});
  }
};
