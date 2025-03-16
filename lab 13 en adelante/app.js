const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');

app.use(session({
    secret: 'string secreto omg', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Inicio');
    next(); 
});

const csrf = require('csurf');
const csrfProtection = csrf(); 
app.use(csrfProtection); 

const usersRoutes = require('./routes/users.routes');
app.use('/users', usersRoutes);

const cancionesRoutes = require('./routes/canciones.routes');
app.use(cancionesRoutes);

const homepageRoute = require('./routes/homepage.routes');
app.use(homepageRoute);

app.use((request, response, next) => {
    console.log('Error 404');
    response.render('404'); 
});

app.listen(3000);