const Posteo = require('../models/posteos.models');
const controlPosteos = {};

// GET ALL (Trae todos los posteos del foro)
controlPosteos.getAllPosteos = async (req, res) => {
    const posteos = await Posteo.findAll();
  
    res.render("menuEdicion", { titlePosteo: "Menú edición", resultados: posteos });
  };
  




module.exports = {controlPosteos};