const { response, request } = require('express');

const express = require('express');
const router = express.Router();

const isAuth = require('../util/is_auth');
const canCreate = require('../util/canCreateSong');
const canEdit = require('../util/canEditSong');
const canPermanentDelete = require('../util/canPermanentDelete');
const canViewPrivateLibrary = require('../util/canViewUsersLibrary');

const canciones_controller = require('../controllers/canciones.controller');

router.get('/AgregarCancion', isAuth, canCreate, canciones_controller.get_agregar);

router.post('/AgregarCancion', isAuth, canCreate, canciones_controller.post_agregar);

router.get('/Library', isAuth, canciones_controller.get_root);

router.get('/EditarCancion/:id', isAuth, canEdit, canciones_controller.get_editar);

router.post('/EditarCancion/:id', isAuth, canEdit, canciones_controller.post_editar);

router.get('/EliminarCancion/:id', isAuth, canPermanentDelete, canciones_controller.get_eliminar);

router.post('/EliminarCancion/:id', isAuth, canPermanentDelete, canciones_controller.post_eliminar);

router.get('/AgregarCancion/Biblioteca/:id', isAuth, canViewPrivateLibrary, canciones_controller.get_agregar_biblioteca);

router.post('/AgregarCancion/Biblioteca/:id', isAuth, canViewPrivateLibrary, canciones_controller.post_agregar_biblioteca);

router.get('/EliminarCancion/:id/Biblioteca', isAuth, canViewPrivateLibrary, canciones_controller.get_eliminar_biblioteca);

router.post('/EliminarCancion/:id/Biblioteca', isAuth, canViewPrivateLibrary, canciones_controller.post_eliminar_biblioteca);

router.get('/MyLibrary', isAuth, canViewPrivateLibrary, canciones_controller.get_root_biblioteca);

router.get('/Library/buscar/:nombre', isAuth, canCreate, canciones_controller.get_buscar);

module.exports = router;