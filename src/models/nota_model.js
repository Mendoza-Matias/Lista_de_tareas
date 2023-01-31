const express = require('express')
const {Schema,model} = require('mongoose')

const notasModel = new Schema({
    nombre:String,
    tipo:String,
    descripcion:String,
})

module.exports = model('notas',notasModel);