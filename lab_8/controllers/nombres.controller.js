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
    response.render('agregar_nombre');
    console.log(request.session.username);
};




exports.post_nombre = (request,response, next) => {
    console.log(request.body);
    const persona1 = new Persona(request.body.nombre);
    persona1.save();
    response.redirect('/nombres')
    console.log(nombres);
};

exports.get_root = ((request,response,next) => {
    response.render('agregar_nombre', {nombres: Persona.fetchAll()});
    })