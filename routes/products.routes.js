//Rutas para la API
const express = require('express');
const router = express.Router();
const { handleSearchTerm } = require('../utils/handleSearch');
const products = require('../controllers/products.controller');



/*************SECCIÓN API PRODUCTOS**********/
router.get('/products',handleSearchTerm,products.getProduct);
router.post('/products',products.createProduct);

module.exports = router;