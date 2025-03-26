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

app.use(bodyParser.json());

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor,
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('cover_art')); 

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