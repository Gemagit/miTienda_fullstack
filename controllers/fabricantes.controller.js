const Fabricante = require("../models/fabricantes.model");//BBDD


const getFabricante = async (req, res) => {
    let fabricantes = [];
    const pagination = req.query.hasOwnProperty('page') && req.query.hasOwnProperty('limit');
    try {
        if (pagination) {
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);
            const skipIndex = (page - 1) * limit;
            const totalPages = 3; // Número total de páginas

            if (page > totalPages || page < 1) {
                return res.status(400).json({ message: "Página no válida" });
            }

            fabricantes = await Fabricante.find({}, '-_id -__v')
                .sort({ _id: 1 })
                .limit(limit)
                .skip(skipIndex)
                .exec();

            res.status(200).json(fabricantes); // Devuelve el fabricante
        } else {
            fabricantes = await Fabricante.find({}, '-_id -__v');
            res.status(200).json(fabricantes); // Devuelve todos los datos
        }
    } catch (err) {
        res.status(400).json({ message: err });
    }
}



const createFabricante = async (req, res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newFabricante = new Fabricante(req.body); // {} nuevo producto a guardar
    // Líneas
    //para guardar 
    // en MongoDB
    try {
        const response = await newFabricante.save();
        res.status(201).json({ message: `Fabricante ${response.nombre} guardado en el sistema con ID: ${response.id}` });
    } catch (err) {
        res.status(400).json({ message: err });
    }
}


const fabricante = {
    getFabricante,
    createFabricante
    //editProduct,
    //deleteProduct
}
module.exports = fabricante;