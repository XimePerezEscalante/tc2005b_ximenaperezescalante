const express = require('express');
const router = express.Router();

router.get('/FreeTrial',(request, response, next) => {
    response.render('freetrial');
});

router.post('/FreeTrial',(request,response,next) => {
    response.redirect('/Register');
});


module.exports = router;