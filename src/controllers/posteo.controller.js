const Posteo = require('../models/posteo.model');
const ctrlPosteo = {};

// GET ALL (Trae todos los posteos del foro)
ctrlPosteo.getAllPosteos = async (req, res) => {
    try {
        const posteos = await Posteo.findAll();
        return res.status(200).send(posteos);
    } catch (error) {
        console.log('Error al buscar los posteos del foro', error);
        return res
            .status(400).send({
                message: 'No se encuentran posteos en la Base de datos.'});
    }
}


// GET BY ID (Trae un posteo filtrado por ID)
ctrlPosteo.getPosteoById = async (req, res) => {
    const { id } = req.params;
try {
    const posteo = await Posteo.findOne({where: {id : id}});
    if (!posteo) {
        return res
            .status(400).send({
            message: 'Posteo no encontrado en la Base de datos.'});
    }else {
        return res.status(200).send(posteo);
    }    
} catch (error){
    console.log('Error en busqueda de posteos por ID', error);
    return res.status(400).send({message: 'Error al buscar el posteo.'});
}
}


// POST (Crea un posteo)
ctrlPosteo.postPosteo = async (req, res) => {
    const {titulo, contenido} = req.body;
    if(!titulo || !contenido){
        return res
            .status(400)
            .send({message: 'Por favor ingrese los datos requeridos: (Título y contenido)',
        });
    } else {
        try {
            const posteoBody = {
                titulo: titulo,
                contenido: contenido,
            };                
                
        const newPosteo = await Posteo.create(posteoBody);
        return res
            .status(200)
            .send({message: 'Posteo creado con exito!', posteo: newPosteo});
        } catch (error) {
            console.log('Error al intentar crear el posteo', error);
    return res.status(400).send({message: 'Se produjo un error.'});   
        }
    }
};


// PUT (Edita un posteo)
ctrlPosteo.updatePosteo = async (req, res) => {
    const { id } = req.params;
    const {titulo, contenido} = req.body;

    if(!titulo || !contenido){
        return res.status(400).send({
            message: 'Por favor ingrese los datos requeridos: (Título y contenido)'});
    } else {
        try{
            const posteoBody = {
                titulo: titulo,
                contenido: contenido
            };
            const updatePosteo = await Posteo.update({posteoBody}, {where: {id: id}});
        } catch (error) {
        console.log('Error al intentar editar el posteo', error);
    return res.status(400).send({message: 'Se produjo un error.'});   
        }
    } 
};


// DELETE (Elimina un posteo)
ctrlPosteo.deletePosteo = async (req, res) => {
    const {id }= req.params;
try {
    const posteo = await Posteo.destroy({where: {id : id}});
    // valida si el posteo existe en la Base de datos
    if (!posteo) {
        return res
            .status(400).send({
            message: 'Posteo no encontrado en la Base de datos.'});
    }else {
        return res.status(200).send({message: 'Posteo eliminado con exito!'});
    }    
} catch (error){
    console.log('Error en busqueda de posteo a eliminar ', error);
    return res.status(400).send({message: 'Error al buscar el posteo.'});
}
}


module.exports = ctrlPosteo;