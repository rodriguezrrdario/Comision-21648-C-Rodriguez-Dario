require('dotenv').config()

const express = require('express')
//const { DBTest } = require('./database.js');
const {sequelize, DBTest} = require('./database.js');
const posteoModel = require('./posteoModel.js');

const app = express()
const PUERTO = process.env.PUERTO || 3000

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

DBTest()

app.listen(PUERTO, () => {
    console.log(`El servidor está corriendo en el puerto.... ${PUERTO}`)
})




// METODOS GET
 app.get('/', async function (req, res) {
    const posteos = await posteoModel.findAll(); 
    res.render('inicio', {posteos: posteos});
   // res.render('inicio.ejs');
}) 

app.get('/agregar', function (req, res) {
    res.render('agregar.ejs')
}) 

app.get('/listado', async function (req, res) {
    const posteos = await posteoModel.findAll();
    res.render('listado.ejs', {posteos: posteos});
    //res.render('listado.ejs')
}) 

app.get('/inicio', function (req, res) {
    res.render('inicio.ejs')
}) 


app.get('/eliminar/:id', async function (req, res) {
    const { id } = req.params;

    try {
        const eliminarPosteo = await posteoModel.destroy({
            where: {id: id}
        })  

        if (eliminarPosteo) {
            res.redirect('/');
        } else {
            res.send('No se pudo eliminarr el posteo :(')
        }
    } catch (err) {
        res.send('ERROR: No se pudo eliminar el posteo: ' + err)
    }
})


 app.get('/editar/:id', async function (req, res) {
    const { id } = req.params;

    try {
        const posteo = await posteoModel.findOne({
            where: { id: id }
        })

        if (posteo) {
            res.render('editar', { posteo: posteo });
        } else {
            res.send('No se pudo encontrar el posteo :(')
        }
    } catch (err) {
        res.send('Se produjo un error al buscar el posteo: ' + err)
    }
}) 




// METODOS POST
app.post('/agregar', async function (req, res) {    
    const { posteo, contenido, imagen } = req.body
//console.log(req.body)
   //res.send('Posteo agregado al foro con exito: ' + posteo)

    try {
        const nuevoPosteo = await posteoModel.create({
            titulo: posteo, 
            contenido: contenido,
            imagen: imagen
        });

        if (nuevoPosteo) {
            res.redirect('/');
        } else {
            res.send('No se pudo agregar el posteo:(')
        }
    } catch (err) {
        res.send('Se produjo un error al cargar el posteo: ' + err)
    }
}) 


app.post('/editar/:id', async function (req, res) {
    const { id } = req.params;
    const { posteo, contenido, imagen } = req.body

    try {
        const posteoActualizado = await posteoModel.update(
            {
                titulo: posteo,
                contenido: contenido,
                imagen: imagen
            }, {
                where: { id: id }
            }
        )
        
        if (posteoActualizado) {
            res.redirect('/');
        } else {
            res.send('ERROR: No se pudo actualizar el posteo :(')
        }
    } catch (err) {
        res.send('ERROR al actualizar el posteo: ' + err)
    }
})