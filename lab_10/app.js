const file_system = require('fs');
const http = require('http');

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
                <form action="/Logout" method="POST">
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
                        <form action="/xp3" method="POST">
                            <li class="nav-item">
                                <input class="nav-link active text-light" type="submit" value="Inicio"></input>
                            </li>
                        </form>
                        <form action="/FreeTrial" method="POST">
                            <input class="nav-link active text-light" type="submit" value="Prueba Gratuita"></input>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>`;

const html_musicPlayer = `<img = src="https://i.pinimg.com/736x/5e/98/eb/5e98eb0c621e1c2a61585e21d542851f.jpg">`;

const html = `<!doctype html>
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
                <form action="/Register" method="POST">
                    <div class="p-2"><button type="Submit" value="Register" class="btn btn-outline-light">Registrar</button></div>
                </form>
                
                
                <form action="/Login" method="POST">
                    <div class="p-2"><button type="Submit" value="Login" class="btn btn-outline-light">Iniciar Sesión</button></div>
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
                        <li class="nav-item">
                            <a class="nav-link text-light active " aria-current="page" href="#">Inicio</a>
                        </li>
                        <form action="/FreeTrial" method="POST">
                            <input class="nav-link active text-light" type="submit" value="Prueba Gratuita"></input>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container-fluid mb-4"> <h1 class="text-light text-center">Nuestros Favoritos</h1> </div>
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner ">
                <div class="carousel-item active">
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/89/7f/71/897f71ab-2064-93ce-38b5-8f484240dfa1/20UMGIM07683.rgb.jpg/1200x1200bb.jpg" class="rounded mx-auto d-block w-50" alt="Not Your Muse Celeste">
                </div>
                <div class="carousel-item">
                    <img src="https://m.media-amazon.com/images/I/7183X1qkVFL._UF1000,1000_QL80_.jpg" class="rounded mx-auto d-block w-50" alt="SYRE Jaden">
                </div>
                <div class="carousel-item">
                    <img src="https://m.media-amazon.com/images/I/512kYBz2huL._UF1000,1000_QL80_.jpg" class="rounded mx-auto d-block w-50" alt="ERYS Jaden">
                </div>
                <div class="carousel-item">
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/96/19/da/9619da38-78f2-04b7-02b1-5e741500ceac/20UMGIM68982.rgb.jpg/1200x1200bf-60.jpg" class="rounded mx-auto d-block w-50" alt="CTV3 Jaden">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    </body>
</html>`;

const html_FT = `<!doctype html>
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
                <form action="/Register" method="POST">
                    <div class="p-2"><button type="Submit" value="Register" class="btn btn-outline-light">Registrar</button></div>
                </form>
                <form action="/Login" method="POST">
                    <div class="p-2"><button type="Submit" value="Login" class="btn btn-outline-light">Iniciar Sesión</button></div>
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
                        <form action="/xp3" method="POST">
                            <li class="nav-item">
                                <input class="nav-link active text-light" type="submit" value="Inicio"></input>
                            </li>
                        </form>
                        <form action="/FreeTrial" method="POST">
                            <input class="nav-link active text-light" type="submit" value="Prueba Gratuita"></input>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="badge">
            <div class="row">
                <div class="col">
                    <div class="card rounded mb-4 border border-5 border-success">
                        <div class="card-body">
                            <p class="text-light text-center"></p>
                            <h1 class="card-title">Disfruta de un mes gratis</h1>
                            <h2 class="card-subtitle mb-2 text-center">No necesitas brindar información de pago</h2>
                            <h3 class="text-left">No dejes pasar esta oportunidad</h3>
                            <h3 class="text-center">Escucha a todos tus artistas favoritos</h3>
                            <button type="button" class="btn btn-success">Comenzar prueba</button>
                        </div>
                    </div>
                    <img class="img-fluid rounded w-70"
                        src="https://m.media-amazon.com/images/I/71Jx3DUwN1L.jpg">
                    
                </div>
                <div class="col">
                    <img class="img-fluid rounded w-70" src="https://www.euphoriazine.com/wp-content/uploads/2024/05/Leigh-Anne-Lead-Image-may24.jpg">
                </div>
            </div>
        </div>
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
                <form action="/Register" method="POST">
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
                        <form action="/xp3" method="POST">
                            <li class="nav-item">
                                <input class="nav-link active text-light" type="submit" value="Inicio"></input>
                            </li>
                        </form>
                        <form action="/FreeTrial" method="POST">
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
                        <form action="/inicio" method="POST">
                            <label for="exampleFormControlInput1" class="form-label fw-medium">Correo electrónico</label>
                            <input type="email" class="form-control" id="exampleFormControlInput" placeholder="nombre@ejemplo.com"> 
                            <label for="inputPassword" class="col-form-label fw-medium">Contraseña</label>
                            <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpInline">
                            <p></p>
                            <input class="btn btn-success text-center" type="button" value="Ingresar">
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
            <form action="/Login" method="POST">
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
                        <form action="/xp3" method="POST">
                            <li class="nav-item">
                                <input class="nav-link active text-light" type="submit" value="Inicio"></input>
                            </li>
                        </form>
                        <form action="/FreeTrial" method="POST">
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
                        <form action="/AutenticarNuevo" method="POST">
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

const html_404 = `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Error 404</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body class="bg-danger-subtle">
    <div class="container py-4 px-3 mx-auto">
        <span>
            <h1 class="text-dark">Error 404:</h1>
            <h2 class="text-dark">La página que buscas no existe :(</h2>
        </span>
        <div class="position-absolute top-50 start-50 translate-middle">
            <img src="https://www.icegif.com/wp-content/uploads/2023/09/icegif-520.gif"> 
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>
</html>`;

const usuarios = [];

function formatoCorreo(correoSF){
    let correoCF = '';
    for (let i = 0; i < correoSF.length;i++){
        if (correoSF.charAt(i) == '%'){
            correoCF = correoCF + '@';
        }
        else{
            correoCF = correoCF + correoSF.charAt(i);
        }
    }
    return correoSF;
}

function agregarDatos(nomUsuario,correoNuevo,nuevaContrasena){
    file_system.writeFileSync('datosUsuario.txt', 'usuario: ' + nomUsuario + ' correo: ' + correoNuevo + ' password: ' + nuevaContrasena); 
}

const server = http.createServer( (request, response) => {    
    if((request.method == "GET" || request.method == "POST") && (request.url == "/xp3" || request.url == "/")) {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    }
    else if((request.method == "GET" || request.method == "POST") && request.url == "/FreeTrial"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_FT);
        response.end();
    }
    else if((request.method == "GET" || request.method == "POST") && request.url == "/Login"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_login);
        response.end();
    }
    else if((request.method == "GET" || request.method == "POST") && request.url == "/Register"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_register);
        response.end();
    }
    else if((request.method == "GET" || request.method == "POST") && request.url == "/AutenticarNuevo"){
        const datos_completos = [];
        request.on('data', (data)=>{
            console.log(data);
            datos_completos.push(data);
        });
        request.on('end', () => {
            const string_datos_completos = Buffer.concat(datos_completos).toString();
            console.log(string_datos_completos);
            const nuevo_nomUsuario = string_datos_completos.split('&')[0].split('=')[1];
            console.log(nuevo_nomUsuario);
            const nuevo_correo = string_datos_completos.split('&')[1].split('=')[1];
            console.log(nuevo_correo);
            const nuevo_pwd = string_datos_completos.split('&')[2].split('=')[1];
            console.log(nuevo_pwd);
            agregarDatos(nuevo_nomUsuario,formatoCorreo(nuevo_correo),nuevo_pwd);
            usuarios.push(nuevo_nomUsuario);
            response.setHeader('Content-Type', 'text/html');
            response.write(html_header);
            response.write(`<div class="alert alert-success" role="alert">Nuevo usuario creado: `);
            for(const usuario of usuarios) {
                response.write(usuario);
                response.write(`</div>`);
            }
            response.write(html_musicPlayer);
            response.write(`</div>`);
            response.write(`</body>`);
            response.write(`</html>`);
            response.end();
        });
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write(html_404);
        response.end();
    }
});

server.listen(3000);