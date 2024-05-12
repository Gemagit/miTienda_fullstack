const Product = require("../models/productos.model");//BBDD

const getProduct = async (req, res) => {
    let products = [];
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

            let query = {}; // Inicializa el objeto de consulta

            // Si hay un término de búsqueda, añade la lógica de búsqueda al objeto de consulta
            if (req.query.hasOwnProperty('searchTerm')) {
                query = {
                    $or: [
                        { name: { $regex: req.query.searchTerm, $options: 'i' } }, // Búsqueda por nombre
                        { fabricante: { $regex: req.query.searchTerm, $options: 'i' } } // Búsqueda por fabricante
                    ]
                };
            }

            products = await Product.find(query, '-_id -__v')
                .sort({ _id: 1 })
                .limit(limit)
                .skip(skipIndex)
                .exec();

            res.status(200).json(products); // Devuelve el producto
        } else {
            products = await Product.find({}, '-_id -__v');
            res.status(200).json(products); // Devuelve todos los datos
        }
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

const createProduct = async (req, res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newProduct = new Product(req.body); // {} nuevo producto a guardar
    try {
        const response = await newProduct.save();
        res.status(201).json({ message: `Producto ${response.name} guardado en el sistema con ID: ${response.id}` });
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

const product = {
    getProduct,
    createProduct
}

module.exports = product;


