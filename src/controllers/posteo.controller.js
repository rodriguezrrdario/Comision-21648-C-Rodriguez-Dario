const Posteo = require('../models/posteos.models');
const controlPosteos = {};

// GET ALL (Trae todos los posteos del foro)
controlPosteos.getAllPosteos = async (req, res) => {
    const posteos = await Posteo.findAll();
    res.render("menuEdicion", { miTitulo: "Menú edición", resultados: posteos });
  };
  

//  PAGINA DE INICIO
controlPosteos.formCrearPosteo = (req, res) => {
  res.render("crearPosteo", { miTitulo: "Nuevo Posteo" });
};



//POST - CREAR UN POSTEO
controlPosteos.postPosteo = async (req, res) => {
  const { titulo, contenido, imagen } = req.body;
  //Validacion de Titulo y Contenido
  if (!titulo || !contenido)
    return res.status(400).send({
      message: "Falta ingresar Titulo y/o Contenido del posteo",
    });
  
  try {
    const posteo = {
      titulo: titulo,
      contenido: contenido,
      imagen, imagen,
    };
    if (!posteo) {
      return res
        .status(409).send({
          message: "Posteo ya existente en base de datos" });
    } else {
      const newPosteo = await Posteo.create(posteo);
      return res.redirect('/menuEdicion');
      //res.send({ message: "Posteo creado con exito" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

//PUT PAGINA PARA EDITAR USUARIO
controlPosteos.formEditarPosteo = async (req, res) => {
  const { id } = req.params;
  const posteo = await Posteo.findOne({ where: { id: id } });
  console.log(posteo);
  res.render("editarPosteo", {
    miTitulo: "Editar Posteo",
    posteo: posteo,
  });
};




controlPosteos.putPosteo = async (req, res) => {
  const { id, titulo, contenido, imagen } = req.body;
  if (!titulo || !contenido) {
    return res.status(404).send({
      message:
        "El título o el cuerpo del posteo estan vacíos",
    });
  }
  const actualizarPosteo = Posteo.update(
    {
      titulo: titulo,
      contenido: contenido,
      imagen: imagen,
    },
    { where: { id: id } }
  );
  return res.redirect("/menuEdicion");
  //res.send({ message: "Posteo editado con exito!" });
};



// BORRAR UN POSTEO
controlPosteos.borrarPosteo = (req, res) => {
  const { id } = req.params;
  const borrarPosteo = Posteo.destroy({ where: { id: id } });
  //valida si ya existe o no en la bd
  if (borrarPosteo) {
    return res.redirect("/menuEdicion");    
  } else {
    // return res
    //   .status(400)
    //   .send({ message: "Posteo no existe en la base de datos" })
  }
};

module.exports = {controlPosteos};