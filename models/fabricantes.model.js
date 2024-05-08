const mongoose = require('../config/db_mongo');


const fabricanteSchema = new mongoose.Schema({
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
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
});

const Fabricante = mongoose.model('Fabricante', fabricanteSchema);


module.exports = Fabricante;