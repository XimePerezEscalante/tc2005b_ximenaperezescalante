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
                <form action="/Register" method="GET">
                    <div class="p-2"><button type="Submit" value="Register" class="btn btn-outline-light">Registrar</button></div>
                </form>
                
                
                <form action="/Login" method="GET">
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
                        <form action="/FreeTrial" method="GET">
                            <input class="nav-link active text-light" type="submit" value="Prueba Gratuita"></input>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#descPJSON"
                aria-expanded="false" aria-controls="descPJSON">
                Package.json descripcion
            </button>
        </div>
        <div class="collapse" id="descPJSON">
            <div class="card card-body bg-info-subtle">
                Este archivo pertenece al ecosistema de Node.js y se usa para definir las características de 
                un proyecto desarrollado en este entorno. <br>El formato JSON significa "JavaScript Object Notation",
                el cual contiene información sobre el proyecto, como su nombre, versión, descripción, autor, 
                licencia y más. <br>
                Sus funciones incluyen especificar las librerías o herramientas, mejor conocidas como dependencias,
                necesarias para el funcionamiento de la aplicación; definir scripts que facilitan la ejecución de 
                tareas comunes en el proyecto, como iniciar el servidor, compilar el código o ejecutar pruebas, 
                entre otros; mantener un control de versiones de las dependencias instaladas utilizando el comando 
                npm install.
            </div>
        </div>
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

const express = require('express');
const router = express.Router();

router.get('/xp3',(request, response, next) => {
    response.send(html);
});

module.exports = router;