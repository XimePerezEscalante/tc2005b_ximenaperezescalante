const express = require('express');
const router = express.Router();

const canciones_controller = require('../controllers/canciones.controller');

router.get('/AgregarCancion', canciones_controller.get_agregar);

router.post('/AgregarCancion', canciones_controller.post_agregar);

router.get('/Library', canciones_controller.get_root);

module.exports = router;