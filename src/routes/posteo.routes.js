const posteoRoutes = require('express').Router();
const ctrlPosteo = require('../controllers/posteo.controller.js');


// GET ALL (Trae todos los posteos del foro)
posteoRoutes.get('/posteo', ctrlPosteo.getAllPosteos);

// GET BY ID (Trae un posteo filtrado por ID)
posteoRoutes.get('/posteo/:id', ctrlPosteo.getPosteoById);


// POST (Crea un posteo)
posteoRoutes.post('/posteo', ctrlPosteo.postPosteo);


// PUT (Edita un posteo)
posteoRoutes.put('/posteo/:id', ctrlPosteo.updatePosteo);

// DELETE (Elimina un posteo)
posteoRoutes.delete('/posteo/:id', ctrlPosteo.deletePosteo);


module.exports = posteoRoutes;

