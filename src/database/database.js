const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");

dotenv.config({path: "./.env"});

const dbName = process.env.DB_NAME;
const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const Host = process.env.HOST;


//Conección 
const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
    host: 'localhost',
    dialect: 'mysql'
});

// Test de conección
async function DBTest() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Conección a base de datos..... OK');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

module.exports = { sequelize, DBTest }