'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "feedbacks_answers",
      [
        {
          id:"469a04b9-6f85-46d2-a01f-67131d02ddb6",
          feedback_id:"e9036557-d06a-4abc-9544-bfa310df1ad2",
          content:"vous pouvez rapporter la chaussure en magasin",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          parent_id:"469a04b9-6f85-46d2-a01f-67131d02ddb6",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("feedbacks_answers", null, {});
  }
};
