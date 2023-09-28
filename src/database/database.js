const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");

dotenv.config({path: "./.env"});

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const port = process.env.PUERTO;


//Conección 
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mysql',
});

// Test de conección
async function DBTest() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: false});
        console.log('Conección a base de datos..... OK');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

module.exports = { DBTest, port, sequelize };