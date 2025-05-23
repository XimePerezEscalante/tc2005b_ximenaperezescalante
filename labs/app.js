const express = require('express');
const app = express();
//const nombreRoute = require('./routes/nombreRoutes');

/*app.use(express.static());*/

const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');

app.use(session({
    secret: 'string secreto omg',
    resave: false,
    saveUninitialized: false,
}));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const csrf = require('csurf');
const csrfProtection = csrf(); 
app.use(csrfProtection); 

const usersRoutes = require('./routes/usersRoutes');
app.use('/users', usersRoutes);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

const nombreRoute = require('./routes/nombreRoutes');

app.use(nombreRoute); 

app.get('/nombres', (request, response, next) => {
    response.send("Ya entró");
    next(); 
} );


app.use((request, response, next) => {
    console.log('Otro middleware!');
    
    //Manda la respuesta
    //response.statusCode = 404;
    response.send('¡Hola mundo!'); 
});

app.listen(3000);
