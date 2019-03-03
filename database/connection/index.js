// // MySQL Database connection to be shared throughout app using Sequelize
// const Sequelize = require('sequelize');
// const connection = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD, {
//     dialect: 'postgres',
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     operatorsAliases: false,
//     logging: false
//   }
// );

const pgp = require('pg-promise')();
const connection = pgp(process.env.DATABASE_URL);
// This allows us to reuse our connection
module.exports = connection;