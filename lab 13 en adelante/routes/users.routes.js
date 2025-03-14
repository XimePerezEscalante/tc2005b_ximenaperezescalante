const express = require('express');
const router = express.Router();

const users_controller = require('../controllers/users.controller');

const usuarios = [];

router.get('/Login', users_controller.get_login);

router.post('/Login', users_controller.post_login);

router.get('/Logout', users_controller.get_logout);

module.exports = router;