const Product = require("../models/productos.model");

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
                const searchTerm = req.query.searchTerm;
                query = {
                    $or: [
                        { name: { $regex: searchTerm, $options: 'i' } }, // Búsqueda por nombre
                        { fabricante: { $regex: searchTerm, $options: 'i' } } // Búsqueda por fabricante
                    ]
                };
            }

            // Añadir lógica de ordenamiento
            const sortField = req.query.sortBy || '_id'; // Campo predeterminado de ordenamiento
            const sortOrder = req.query.order || 'asc'; // Orden predeterminado

            // Construye el objeto de opciones de ordenamiento
            const sortOptions = {};
            sortOptions[sortField] = sortOrder === 'asc' ? 1 : -1;

            products = await Product.find(query, '-__v')
                .sort(sortOptions) // Aplica el ordenamiento
                .limit(limit)
                .skip(skipIndex)
                .exec();

            res.status(200).json(products); // Devuelve los productos encontrados
        } else {
            // Si no hay paginación, devuelve todos los datos de productos
            products = await Product.find({}, '-__v');
            res.status(200).json(products); // Devuelve todos los datos
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const createProduct = async (req, res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newProduct = new Product(req.body); // Crea una nueva instancia de producto
    try {
        const response = await newProduct.save(); // Guarda el nuevo producto en la base de datos
        res.status(201).json({ message: `Producto ${response.name} guardado en el sistema con ID: ${response._id}` });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getProduct,
    createProduct
};
