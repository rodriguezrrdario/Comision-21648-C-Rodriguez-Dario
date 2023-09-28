const posteoRoutes = require('express').Router();
const {controlPosteos} = require('../controllers/posteo.controller');
const Posteo = require("../models/posteos.models");

// GET ALL (Trae todos los posteos del foro)
posteoRoutes.get('/menuEdicion', controlPosteos.getAllPosteos);

/* // GET BY ID (Trae un posteo filtrado por ID)
posteoRoutes.get('/posteo/:id', ctrlPosteo.getPosteoById);


// POST (Crea un posteo)
posteoRoutes.post('/posteo', ctrlPosteo.postPosteo);

// PUT (Edita un posteo)
posteoRoutes.put('/posteo/:id', ctrlPosteo.updatePosteo);

// DELETE (Elimina un posteo)
posteoRoutes.delete('/posteo/:id', ctrlPosteo.deletePosteo); */

module.exports = posteoRoutes;

