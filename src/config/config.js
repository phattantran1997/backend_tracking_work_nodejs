require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE_NAME,
    // "storage": process.env.DB_DATABASE_NAME,
    "host": process.env.DB_HOST,
    // "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    // "timezone": "+07:00"
   
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "aucv",
    "storage": process.env.DB_DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "storage": process.env.DB_DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "sqlite"
  }
};