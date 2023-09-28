const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { DBTest, port } = require('./database/database');
// Se intancian las rutas que voy a usar
const indexRouter  = require('./routes/index.routes');
const posteoRoutes = require('./routes/posteos.routes');

require('dotenv').config()
const dotenv = require('dotenv');


// Inicio del Servidor
const app = express();
const PUERTO = process.env.PUERTO || 4000;


//MIDDLEWARES
//Con el url encoded se reconocen las rutas y direccionamiento
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(morgan('tiny'));

//dotenv.config({path: "./.env"});


//configuración para el motor de plantillas
app.set('view engine', 'ejs');
//Se establece la ruta de la carpeta dinámica
app.set('views', path.join(__dirname, 'views'));


// Testea la base de datos
DBTest()

app.use(indexRouter);
app.use(posteoRoutes);

app.listen(PUERTO, () => {
    console.log(`El servidor está corriendo y escuchando en el puerto.... ${PUERTO}`)
});