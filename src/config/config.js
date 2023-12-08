// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
//  host: process.env.MYSQL_HOST,
//  dialect: 'mysql',
//  pool: {
//   max: 5,
//   min: 0,
//   idle: 10000
//  }
// });



// // Sync all models to the database
// sequelize.sync({ force: false })
//  .then(() => console.log('Database & tables created!'))
//  .catch(error => console.log('This error occured', error));

// module.exports = sequelize;



/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/



const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
 host: process.env.POSTGRES_HOST,
 port: process.env.POSTGRES_PORT,
 dialect: 'postgres',
 pool: {
  max: 5,
  min: 0,
  idle: 10000
 }
});

// Sync all models to the database
sequelize.sync({ force: false })
 .then(() => console.log('Database & tables created!'))
 .catch(error => console.log('This error occured', error));

module.exports = sequelize;



