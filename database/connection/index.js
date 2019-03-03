const pgp = require('pg-promise')();
const connection = pgp(process.env.DATABASE_URL);
// This allows us to reuse our connection
module.exports = connection;