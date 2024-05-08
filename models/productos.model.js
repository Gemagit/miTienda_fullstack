const mongoose = require('../config/db_mongo');


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
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fabricante'
    }
});


/* let newProduct= {
    "id": "001",
    "name":"Vestido verde" ,
    "img":"https://static.zara.net/assets/public/2bd4/a435/ebb5425da2e0/9ca1b91969c6/02513750500-a4/02513750500-a4.jpg?ts=1707133447434&w=750" ,
    "relevancia": 7,
    "precio":" 69.95€",
    "descripcion": "Vestido midi confeccionado en hilatura con mezcla de lana. Cuello subido fluido y manga sisa. Detalle de tejido drapeado en lateral. Bajo con abertura en espalda. Cierre con cremallera oculta.Un vestido midi de corte minimalista con detalle drapeado a un lateral confeccionado en un tejido delicado con mezcla de lana de tacto agradable. En su diseño depurado destaca el cuello subido que se abre en un escote en pico a la espalda. Una prenda sencilla y a la vez sofisticada.",
    "tejido": "hilatura y lana",
    "pais_de_fabricacion": "Thailandia",
    "fabricante_id":"fabricante_id"
}*/


const Product = mongoose.model('Product', productSchema);

/*Provider.create(newProduct)
    .then(data => console.log(data)) */



module.exports = Product;