const express = require('express');
const router = express.Router();

router.get('/xp3',(request, response, next) => {
    response.render('homepage');
});

const path = require('path');

router.get('/PurpleMode', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;