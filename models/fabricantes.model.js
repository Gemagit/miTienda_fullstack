const mongoose = require('../config/db_mongo');


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
});

const Fabricante = mongoose.model('Fabricante', fabricanteSchema);


module.exports = Fabricante;