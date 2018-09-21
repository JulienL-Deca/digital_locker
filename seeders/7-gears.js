'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "gears",
      [
        {
          id:"26c52ad0-1ebc-44f6-87d5-71cd908fa7e8",
          product_id:"a3b1ad6a-5063-44dc-aefe-e66e474e4a2d",
          lifetime_progress:300,
          purchase_date:"NOW()",
          usable:"yes",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id:"26c52ad0-1ebc-44f6-87d5-71cd908fa7e6",
          product_id:"edf0f1a5-a009-4076-b5e0-9ae3c779e11b",
          lifetime_progress:400,
          purchase_date:"NOW()",
          usable:"yes",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45000",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id:"26c52ad0-1ebc-44f6-87d5-71cd908fa7e1",
          product_id:"d5c9a783-fa24-4d17-b0fb-dd2b88894cd4",
          lifetime_progress:500,
          purchase_date:"NOW()",
          usable:"yes",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id:"26c52ad0-1ebc-44f6-87d5-71cd908fa876",
          product_id:"10fba447-433e-4304-b68b-1e2233d6f433",
          lifetime_progress:1200,
          purchase_date:"NOW()",
          usable:"no",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id:"26c52ad0-1ebc-44f6-87d5-71cd908fa123",
          product_id:"738bab54-a421-42eb-9cc1-085384e21892",
          lifetime_progress:1200,
          purchase_date:"NOW()",
          usable:"yes",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id:"26c52ad0-1ebc-44f6-87d5-71cd908fa234",
          product_id:"d053fc69-0d48-47da-8244-6a69f08fce27",
          lifetime_progress:1200,
          purchase_date:"NOW()",
          usable:"yes",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id:"26c52ad0-1ebc-44f6-87d5-71cd908fa345",
          product_id:"10fba447-433e-4304-b68b-1e2233d6f433",
          lifetime_progress:1200,
          purchase_date:"NOW()",
          usable:"yes",
          user_id:"341557c1-1c3a-4221-8a6f-a5cf5b892d99",
          created_at: "NOW()",
          updated_at: "NOW()"
        }

      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("gears", null, {});
  }
};
