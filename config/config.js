// Allows us to use environment variables in .env
// Loads our environment variables prior to any of 
// the sequelize-cli commands running, and tells the
// CLI to look for a DB connection based on our .env file
require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};