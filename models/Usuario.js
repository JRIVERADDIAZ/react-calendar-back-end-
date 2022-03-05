const { Schema,model } = require('mongoose');
const Evento = require('../models/Evento');

const UsuarioSchema = Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required: true,
    unique: true
},
pasword:{
    type:String,
    required: true
}
})

module.exports = model('Usuario', UsuarioSchema )