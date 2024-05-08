//Rutas para la API
const express = require('express');
const router = express.Router();
const fabricantes = require('../controllers/fabricantes.controller');


/*************SECCIÓN API PRODUCTOS**********/
router.get('/fabricantes',fabricantes.getFabricante);
router.post('/fabricantes',fabricantes.createFabricante);

module.exports = router;