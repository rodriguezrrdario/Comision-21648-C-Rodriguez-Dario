
// Instancio el indexRouter para que express lo tome como ruta
const indexRouter = require('express').Router();
const { controlIndex }  = require('../controllers/index.controller');


// GET en el inicio y me dirige al controlador de Index para renderizar
indexRouter.get('/', controlIndex.renderIndex);

module.exports = indexRouter;