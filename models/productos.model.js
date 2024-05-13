const mongoose = require('../config/db_mongo');
const ObjectId = require('mongodb').ObjectId;


const productSchema = new mongoose.Schema({
    id: {
        type:Number,
        required:true,
        unique:true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required:true
    },
    relevancia: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tejido: {
        type: String,
        required: true
    },
    made: {
        type: String,
        required: false
    },
    fabricante_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Fabricante'
    }
});



const Product = mongoose.model('Product', productSchema);



module.exports = Product;
