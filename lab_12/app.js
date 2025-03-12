const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Inicio');
    next(); 
});

const usersRoutes = require('./routes/users.routes');
app.use(usersRoutes);

const freeTrialRoutes = require('./routes/freeTrial.routes');
app.use(freeTrialRoutes);

const homepageRoute = require('./routes/homepage.routes');
app.use(homepageRoute);

app.use((request, response, next) => {
    console.log('Error 404');
    response.send(html_404); 
});

app.listen(3000);