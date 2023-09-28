const posteoRoutes = require('express').Router();
const {controlPosteos} = require('../controllers/posteo.controller');
const Posteo = require("../models/posteos.models");

// ruta GET MenuEdicion (Trae todos los posteos del foro al Menú de edición)
posteoRoutes.get('/menuEdicion', controlPosteos.getAllPosteos);

// GET BY ID (Trae un posteo filtrado por ID)
//posteoRoutes.get('/posteo/:id', ctrlPosteo.getPosteoById);

//ruta para Crear un posteo
posteoRoutes.get("/crearPosteo", controlPosteos.formCrearPosteo);
posteoRoutes.post("/guardarPosteo", controlPosteos.postPosteo);

// ruta PUT para actualizar un posteo
posteoRoutes.get('/editarPosteo/:id', controlPosteos.formEditarPosteo);
posteoRoutes.post('/actualizarPosteo', controlPosteos.putPosteo);

// ruta DELETE 
posteoRoutes.get('/borrarPosteo/:id', controlPosteos.borrarPosteo);

module.exports = posteoRoutes;

