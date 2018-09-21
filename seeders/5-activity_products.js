'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "activity_products",
      [
        {
          id:"a3826fe0-fdbf-4557-9f1e-c8a233c28fcd",
          activity_id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
          product_id:"5bbda893-efa4-48bc-a625-42c54a42f74d",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("activity_products", null, {});
  }
};
