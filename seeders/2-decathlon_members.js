'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "decathlon_members",
      [
        {
          id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          fullname:"Prout Mieux",
          email:"prout.meiux@yahoo.com",
          sport:"running",
          job_title:"Ingénieur Produit Running",
          image_url:"http://img1.looper.com/img/gallery/the-worst-things-yoda-has-ever-done/intro-1523455063.jpg",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("decathlon_members", null, {});
  }
};
