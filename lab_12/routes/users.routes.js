const express = require('express');
const router = express.Router();

const usuarios = [];

router.get('/Login', (request,response,next) => {
    response.render('login');
});

router.post('/Login', (request, response, next) => {
    console.log(request.body);
    usuarios.push(request.body.usernameLogin);
    response.render('home',{usuarios: usuarios});
});

router.get('/Register', (request,response,next) => {
    response.render('signup');
});

router.post('/Register', (request,response,next) => {
    console.log(request.body);
    usuarios.push(request.body.username);
    response.render('home',{usuarios: usuarios});
})

router.get('/Logout', (request,response,next) => {
    response.redirect('/xp3');
})

module.exports = router;