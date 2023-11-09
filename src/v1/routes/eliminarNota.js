const express = require('express')
const eliminarNota = express.Router()

const notas = require('../models/nota_model')

eliminarNota.get('/eliminar/:id',async(req,res)=>{
    
    //Similar al medotod update , en este caso capturo el cuerpo de la peticion y el id con el fin del eliminarlo
    const eliminarNota = await notas.findByIdAndDelete(req.params.id,req.body)

    console.log(eliminarNota)
    
    res.redirect('/')
})

module.exports = eliminarNota;