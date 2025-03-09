const express = require('express');
const router = express.Router();

const nombre_controller = require('../controllers/nombres.controller');

//Registrar middleware
router.get('/nombre', nombre_controller.get_nombre);

router.post('/nombre' , nombre_controller.post_nombre);

module.exports = router;

const path = require('path');

router.get('/tienda' ,(request,response,next)=> {
    response.sendFile(path.join(__dirname, '..','views','index.html'));
} ); 


//router.get('/:id', plantas);



// Ruta raíz
router.get('/',nombre_controller.get_root);



module.exports = router;