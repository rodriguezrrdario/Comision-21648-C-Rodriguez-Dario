const { DataTypes } = require('sequelize');

//importo desde mi coneccion a la base de datos
const { sequelize } = require('../database/database');

// Define un nuevo modelo, representando una tabla en la Base de datos
const Posteo = sequelize.define(
    'Posteo', {
        //Atributos del modelo
        titulo: {
            type: DataTypes.STRING,
        },
        contenido: {
            type: DataTypes.STRING,
        },
        imagen: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false,
        tableName: 'posteos',
    });

// `sequelize.define` tambien retorna el modelo
console.log(Posteo === sequelize.models.Posteo); // true
module.exports = Posteo;