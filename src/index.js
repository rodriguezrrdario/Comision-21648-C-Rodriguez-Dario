require('dotenv').config()

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { DBTest } = require('./database/database');
const posteoRoutes = require('../src/routes/posteo.routes');

const Posteo = require('./models/posteo.model.js');
const path = require('node:path'); 

// Inicio del Servidor
const app = express();
const PUERTO = process.env.PUERTO || 4000;

//configuración para el motor de plantillas
app.set('view engine', 'ejs');

//Middlewares
dotenv.config({path: "./.env"});
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true}));

app.set('views', path.join(__dirname, 'src/views'));

DBTest()
app.use(posteoRoutes);

app.listen(PUERTO, () => {
    console.log(`El servidor está corriendo y escuchando en el puerto.... ${PUERTO}`)
})