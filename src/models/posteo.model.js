const { Sequelize, DataTypes } = require('sequelize');

//Importar el modelo desde mi coneccion a la base de datos
const { sequelize } = require('../database/database');

// Define un nuevo modelo, representando una tabla en la Base de datos
const Posteo = sequelize.define('Posteo', {
    titulo: {
        type: DataTypes.STRING,
    },
    contenido: {
        type: DataTypes.STRING,
    }  
}, {
    timestamps: false,
    tableName: 'posteos',
});

module.exports = Posteo;