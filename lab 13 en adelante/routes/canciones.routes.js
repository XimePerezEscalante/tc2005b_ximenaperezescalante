const { response, request } = require('express');

const express = require('express');
const router = express.Router();

const isAuth = require('../util/is_auth');

const canciones_controller = require('../controllers/canciones.controller');

router.get('/AgregarCancion', isAuth, canciones_controller.get_agregar);

router.post('/AgregarCancion', isAuth, canciones_controller.post_agregar);

router.get('/Library', isAuth, canciones_controller.get_root);

router.get('/EditarCancion/:id', isAuth, canciones_controller.get_editar);

router.post('/EditarCancion/:id', isAuth, canciones_controller.post_editar);

router.get('/EliminarCancion/:id', isAuth, canciones_controller.get_eliminar);

router.post('/EliminarCancion/:id', isAuth, canciones_controller.post_eliminar);

module.exports = router;