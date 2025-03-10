const html_header = `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>XP3</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body class="bg-dark">
    <div class="container py-4 px-3 mx-auto">
    
        <header class="d-flex justify-content-between align-items-md-center pb-3">
            <h1 class="h4">
                <a href="/" class="d-flex align-items-center text-light text-decoration-none">
                    <span>XP3</span>
                </a>
            </h1>
            <div class="d-flex flex-row-reverse">                
                <form action="/Logout" method="GET">
                    <div class="p-2"><button type="Submit" value="Logout" class="btn btn-outline-light">Cerrar Sesión</button></div>
                </form>
                
            </div>
            
        </header>
        <nav class="navbar navbar-expand-lg rounded bg-secondary mb-4">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <form action="/xp3" method="GET">
                            <li class="nav-item">
                                <input class="nav-link active text-light" type="submit" value="Inicio"></input>
                            </li>
                        </form>
                        <form action="/FreeTrial" method="GET">
                            <input class="nav-link active text-light" type="submit" value="Prueba Gratuita"></input>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
        <img = src="https://i.pinimg.com/736x/5e/98/eb/5e98eb0c621e1c2a61585e21d542851f.jpg">
    </div>
    </body>
</html>`;

const html_login = `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body class="bg-dark">
    <div class="container py-4 px-3 mx-auto">

        <header class="d-flex justify-content-between align-items-md-center pb-3">
            <h1 class="h4">
                <a href="/" class="d-flex align-items-center text-light text-decoration-none">
                    <span>XP3</span>
                </a>
            </h1>
            <div class="d-flex flex-row-reverse">
                <form action="/Register" method="GET">
                    <div class="p-2"><button type="Submit" value="Register" class="btn btn-outline-light">Registrar</button></div>
                </form>
            </div>

        </header>
        <nav class="navbar navbar-expand-lg rounded bg-secondary mb-4">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <form action="/xp3" method="GET">
                            <li class="nav-item">
                                <input class="nav-link active text-light" type="submit" value="Inicio"></input>
                            </li>
                        </form>
                        <form action="/FreeTrial" method="GET">
                            <input class="nav-link active text-light" type="submit" value="Prueba Gratuita"></input>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="row">
            <div class="col"></div>
            <div class="col-auto">
                <div class="card  align-items-center border border-success border-5 text-center">
                    <p></p>
                    <div class="card-title fs-3 fw-semibold">Inicio de sesión</div>
                    <div class="card-body">
                        <form action="/Login" method="POST">
                            <label for="correoLogin" class="form-label fw-medium">Correo electrónico</label>
                            <input type="email" class="form-control" id="correoLogin" placeholder="nombre@ejemplo.com"> 
                            <label for="contrasenaLogin" class="col-form-label fw-medium">Contraseña</label>
                            <input type="password" id="contrasenaLogin" class="form-control" aria-describedby="passwordHelpInline">
                            <p></p>
                            <input class="btn btn-success text-center" type="submit" value="Ingresar">
                        </form>
                    </div>
                </div>
            </div>
            <div class="col"></div>
            
        </div> 
    </div>
</body>

</html>`;

const html_register = `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sign up</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body class="bg-dark">
    <div class="container py-4 px-3 mx-auto">

        <header class="d-flex justify-content-between align-items-md-center pb-3">
            <h1 class="h4">
                <a href="/" class="d-flex align-items-center text-light text-decoration-none">
                    <span>XP3</span>
                </a>
            </h1>
            <form action="/Login" method="GET">
                <div class="p-2"><button type="Submit" value="Login" class="btn btn-outline-light">Iniciar Sesión</button></div>
            </form>

        </header>
        <nav class="navbar navbar-expand-lg rounded bg-secondary mb-4">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <form action="/xp3" method="GET">
                            <li class="nav-item">
                                <input class="nav-link active text-light" type="submit" value="Inicio"></input>
                            </li>
                        </form>
                        <form action="/FreeTrial" method="GET">
                            <input class="nav-link active text-light" type="submit" value="Prueba Gratuita"></input>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="row">
            <div class="col"></div>
            <div class="col-auto">
                <div class="card  align-items-center border border-success border-5 text-center">
                    <p></p>
                    <div class="card-title fs-3 fw-semibold">Registrar cuenta</div>
                    <div class="card-body">
                        <form action="/Register" method="POST">
                            <label for="username" class="form-label fw-medium">Nombre de usuario</label>
                            <input type="text" class="form-control" id="username" name="username">
                            <label for="correo" class="form-label fw-medium">Correo
                                electrónico</label>
                            <input type="email" class="form-control" id="correo" name="correo"
                                placeholder="nombre@ejemplo.com">
                            <label for="contrasena" class="col-form-label fw-medium">Contraseña</label>
                            <input type="password" id="contrasena"  name="contrasena" class="form-control"
                                aria-describedby="passwordHelpInline">
                            <p></p>
                            <input class="btn btn-success text-center" type="submit" value="Ingresar">
                        </form>
                    </div>
                </div>
            </div>
            <div class="col"></div>

        </div>
    </div>
</body>

</html>`;

const express = require('express');
const router = express.Router();

const usuariosOnline = [];

router.get('/Login', (request,response,next) => {
    response.send(html_login);
});

router.post('/Login', (request, response, next) => {
    console.log(request.body);
    usuariosOnline.push(request.body.correoLogin);
    console.log(usuariosOnline);
    response.send(html_header);
});

const usuarios = [];

router.get('/Register', (request,response,next) => {
    response.send(html_register);
});

router.post('/Register', (request,response,next) => {
    console.log(request.body);
    usuarios.push(request.body.username);
    response.send(html_header);
})

router.get('/Logout', (request,response,next) => {
    response.redirect('/xp3');
    
})

module.exports = router;