// Creo mi controlador Index como objeto vacio
const controlIndex = {};

// 
controlIndex.renderIndex = (req, res) => {
    res.render('inicio', {miTitulo: 'Inicio del Foro'});
};

module.exports = {controlIndex};