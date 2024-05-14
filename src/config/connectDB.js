const { Sequelize } = require('sequelize');
require('dotenv').config();


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_DATABASE_NAME,
        logging: true,
        query: {
            "raw": true
        },
        timezone: "+10:00",
       
    });

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Sequelize Connection has been established successfully.');
    } catch (error) {
        console.error('Sequelize Unable to connect to the database:', error);
    }
}
module.exports = connectDB;
