//Rutas para la API
const express = require('express');
const router = express.Router();
const products = require('../controllers/products.controller');


/*************SECCIÓN API PRODUCTOS**********/
router.get('/products',products.getProduct);
router.post('/products',products.createProduct);

module.exports = router;