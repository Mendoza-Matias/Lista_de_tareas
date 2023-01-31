const express = require('express')
const editarNota = express.Router()

const notas = require('../models/nota_model')

editarNota.post('/editar/:id',async(req,res)=>{

     const cambioNota = await notas.findByIdAndUpdate(req.params.id,req.body)

    console.log(cambioNota)
    
    res.redirect('/')
})

module.exports = editarNota;