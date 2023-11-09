const express = require('express')
const vistas = express.Router();

//Esquema de mongoDb exportado
const notas = require('../models/nota_model')

vistas.get('/',async(req,res)=>{
    //Creo una constante donde guardar mis notas
    //La propiedad .lean convierte el arreglo de formato mongo a uno de js

    const verNota = await notas.find().lean()
    
    res.render('index',{verNota})
})
//Vista de formulario de creacion
vistas.get('/create',(req,res)=>{
    res.render('crearNota')
})

vistas.get('/editar/:id',async(req,res)=>{

    //Mediante la propiedad findbyId capturo el id como parametro del request y con esto consigo la información de mi nota
    const infoNota = await notas.findById(req.params.id).lean()
    
    console.log(infoNota)

    res.render('editarNota', {infoNota})
})

module.exports = vistas;