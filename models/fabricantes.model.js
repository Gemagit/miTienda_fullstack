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
    id_fabricante: {
        type: Number,
        required:true
    }
});

const Fabricante = mongoose.model('Fabricante', fabricanteSchema);


module.exports = Fabricante;