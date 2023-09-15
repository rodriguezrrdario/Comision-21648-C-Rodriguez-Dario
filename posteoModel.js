const { DataTypes } = require('sequelize');
const { sequelize } = require('./database.js');

const Posteo = sequelize.define('Posteo', {
    titulo: {
        type: DataTypes.STRING,
    },
    contenido: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
    tableName: 'posteos',
});

module.exports = Posteo;