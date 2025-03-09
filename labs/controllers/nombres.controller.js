const html = `<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    <title>Xime</title>


</head>

<body>

    <header>
            <h1><strong>Xime Perez</strong></h1>
    </header>
    <form action="/nombre" method="POST">
        <label for="nombre" class="label">Nombre de la planta</label>
        <input class="input is-info" type="text" placeholder="Nombre" id="nombre" name="nombre" />
        <br><br>
        <input class="button is-info" type="submit" value="Enviar">
    </form>;


    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="app.js"></script>
</body>

</html>`; 

const Persona = require('../models/nombre.model');

// Acciones del controlador
exports.get_nombre = (request, response, next) => {
    response.render('agregar_nombre',{
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
    console.log(request.session.username);
};




exports.post_nombre = (request,response, next) => {
    console.log(request.body);
    const persona1 = new Persona(request.body.nombre);
    persona1.save()
    .then( ()=> {
        request.session.info = 'La persona $';

        console.log('nombre guardado');
        response.redirect('/nombre');
        } )
    .catch( (error)=> {
        console.log(error);
    });

    response.setHeader('Set-Cookie', `ultimo_nombre=${persona1.nombre}`);
    //console.log(nombres);
    
    
};

exports.get_root = ((request,response,next) => {
    const mensaje = request.session.info || '';
    if (request.session.info){
        request.session.info = '';
    }
    /* Persona.fetch(request.params.id)
        .then(([rows, fieldData])) => {
        console.log(fieldData);
        console.log(rows)
    } */
   Planta.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(fieldData);
            console.log(rows);
            response.render('lista_plantas', {
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                plantas: rows,
                info: mensaje,
            });
        }).catch((error) => {
            console.log(error);
        });
    console.log(request.get('Cookie'));
    response.render('agregar_nombre', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        nombres: Persona.fetchAll(),
        info: mensaje,    
    });
})

