const db = require("./models/index");


// // We can do simple replacements with an array of data
// db.sequelize
//   .query("SELECT * FROM users WHERE age = 28", {
//     type: db.sequelize.QueryTypes.SELECT
//   })
//   .then(users => {
//     console.log(users);
//   });
//
// db.users
//   .findOne({
//     where: {age: 28}
//   })
//   .then(user => {
//     console.log(user.email);
//   });
//
//
// db.sequelize
//   .query("SELECT * FROM activities WHERE sport = 'running'", {
//     type: db.sequelize.QueryTypes.SELECT
//   })
//   .then(users => {
//     console.log(users);
//   });
// const uuid = '061c6b4c-0461-4cac-a53c-6bbf81a45999'
//
// db.gears
//   .findAll({
//     where: {user_id:uuid}
//   })
//   .then(gears => {
//     console.log(gears);
//   });

const geo_id = 'a7b3f031d951ee7c529d';

db.users
  .findOne({
    where: {geonaute_id:geo_id}
  })
  .then(users => {
    console.log(users.id);
  });



  // db.gears
  // .findAll
  //   ({ where: { user_id: '061c6b4c-0461-4cac-a53c-6bbf81a45999' } })
  // .then(gears => {
  //   console.log(gears);
  //   // projects will be an array of Project instances with the specified name
  // })
