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
                            <form action="/FreeTrial" method="POST">
                                <button type="submit" class="btn btn-success" value="StartFreeTrial">Comenzar prueba</button>
                            </form>
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

const express = require('express');
const router = express.Router();

router.get('/FreeTrial',(request, response, next) => {
    response.send(html_FT);
});

router.post('/FreeTrial',(request,response,next) => {
    response.redirect('Register');
});


module.exports = router;