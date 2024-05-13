const mongoose = require('../config/db_mongo');
const ObjectId = require('mongodb').ObjectId;


const fabricanteSchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true
    },
    nombre: {
        type: String,
        required: true
    },
    CIF: {
        type: String,
        required:true
    },
    direccion: {
        type: String,
        required: false
    },
    producto_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Producto'
    }
});

const Fabricante = mongoose.model('Fabricante', fabricanteSchema);


module.exports = Fabricante;