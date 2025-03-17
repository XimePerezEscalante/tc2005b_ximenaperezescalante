const { response, request } = require('express');

const express = require('express');
const router = express.Router();

const isAuth = require('../util/is_auth');
const canAssignRoles = require('../util/canAssignRole');

const users_controller = require('../controllers/users.controller');


const usuarios = [];

router.get('/Signup', users_controller.get_signup);

router.post('/Signup', users_controller.post_signup);

router.get('/Login', users_controller.get_login);

router.post('/Login', users_controller.post_login);

router.get('/Logout', users_controller.get_logout);

router.get('/AsignarRol', isAuth, canAssignRoles, users_controller.get_asignar_rol);

router.post('/AsignarRol/:id', isAuth, canAssignRoles, users_controller.post_asignar_rol);

router.post('/ModificarRol/:id', isAuth, canAssignRoles, users_controller.post_modificar_rol);

module.exports = router;