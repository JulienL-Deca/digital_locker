'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: "061c6b4c-0461-4cac-a53c-6bbf81a45166",
          geonaute_id: "32132132",
          first_name: "TOTO",
          lastname: "titi",
          email:"toto.titi@gmail.com",
          age: 233,
          country: "France",
          language: "FR",
          weight: 171,
          size: 76,
          image_url: "https://lemag.nikonclub.fr/wp-content/uploads/2017/07/08-1420x945.jpg",
          token: "hdfh165768dfyt7gg5gg4",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id: "061c6b4c-0461-4cac-a53c-6bbf81a45111",
          geonaute_id: "13568",
          first_name: "TUTU",
          lastname: "toto",
          email:"tutu.toto@yahoo.com",
          age: 333,
          country: "France",
          language: "FR",
          weight: 275,
          size: 275,
          image_url: "https://www.cotebasquetendances.fr/wp-content/uploads/2018/02/skate-2355604_960_720-300x200.jpg",
          token: "hdfh1657456fyt7gg5gg4",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id: "061c6b4c-0461-4cac-a53c-6bbf81a45000",
          geonaute_id: "1234567890",
          first_name: "TATI",
          lastname: "tutu",
          email:"tati.tutu@youhouuu.com",
          age: 528,
          country: "France",
          language: "FR",
          weight: 748,
          size: 478,
          image_url: "https://images.caradisiac.com/images/1/9/5/5/111955/S1-la-fiat-124-spider-est-la-voiture-gay-de-l-annee-2017-393630.jpg",
          token: "hdfh16574lfj56t7gg5dd4",
          created_at: "NOW()",
          updated_at: "NOW()"
        },
        {
          id: "061c6b4c-0461-4cac-a53c-6bbf81a45999",
          geonaute_id: "1234567890",
          first_name: "TATA",
          lastname: "tyty",
          email:"tata.tyty@yeah.com",
          age: 97,
          country: "France",
          language: "FR",
          weight: 845,
          size: 1585,
          image_url: "https://www.aquadomia.com/wp-content/uploads/moniteurok-1024x685.jpg",
          token: "hdfh16574lfj56t7gg5dd4",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
