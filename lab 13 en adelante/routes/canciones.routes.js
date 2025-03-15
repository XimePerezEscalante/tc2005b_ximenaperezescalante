const express = require('express');
const router = express.Router();

const canciones_controller = require('../controllers/canciones.controller');

router.get('/AgregarCancion', canciones_controller.get_agregar);

router.post('/AgregarCancion', canciones_controller.post_agregar);

router.get('/Library', canciones_controller.get_root);

router.get('/EditarCancion/:id', canciones_controller.get_editar);

router.post('/EditarCancion/:id', canciones_controller.post_editar);

router.get('/EliminarCancion/:id', canciones_controller.get_eliminar);

router.post('/EliminarCancion/:id', canciones_controller.post_eliminar);

module.exports = router;