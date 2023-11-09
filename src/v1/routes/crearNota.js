const express = require('express')
const crearNota = express.Router()

//Esquema de mongoDb exportado
const notas = require('../models/nota_model')

crearNota.post('/create/add', async(req,res)=>{
    //creo una nota nueva y almaceno el cuerpo de la peticion (Lo ingresado por el usuario).
    const  nuevaNota = notas(req.body)
    //Guardo la nueva nota en mi mongoDB mendiante la propiedad .save()
    const guardar = await nuevaNota.save()
    //Redirecciono mi pagina al inicio
    console.log(guardar)
    res.redirect('/')
})
module.exports = crearNota;