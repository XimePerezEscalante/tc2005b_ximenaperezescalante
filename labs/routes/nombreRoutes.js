const { response, request } = require('express');
const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');

const nombre_controller = require('../controllers/nombres.controller');

//Registrar middleware
router.get('/nombre', isAuth, nombre_controller.get_nombre);
router.post('/nombre', isAuth, nombre_controller.post_nombre);

const path = require('path');

router.get('/tienda', isAuth, (request,response,next)=> {
    response.sendFile(path.join(__dirname, '..','views','index.html'));
} ); 

router.get('/:id', isAuth, nombre_controller.get_root);
// Ruta raíz
router.get('/', isAuth, nombre_controller.get_root);



module.exports = router;