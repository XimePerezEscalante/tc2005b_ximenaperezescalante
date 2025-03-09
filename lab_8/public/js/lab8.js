
const file_system = require('fs');

//Pregunta 1
function promedio(arr){
    let acum = 0;
for (let elem of arreglo){
        acum = acum + elem;
        console.log(acum);
    }
}

//Pregunta 2
function escribir(texto){
    file_system.writeFileSync('ejercicio2.txt', texto); 
}

//Pregunta 3
function es_palindromo(palabra){
    let res = true;
    let endChar = palabra.length - 1;
    for (let i = 0;i < palabra.length;i++){
        if (palabra.charAt(i) != palabra.charAt(endChar)){
            res = false;
        }
        endChar = endChar - 1;
    }
    return res; 
}

//Mandar llamar funciones

//Funcion 1
const arreglo = [5, 4, 3, 43, 65, 27, 41, 93, 51, 74, 37, 56, 29];
promedio(arreglo);

//Funcion 1
escribir('laboratorio8 - ximena perez escalante');

//Funcion 3
console.log(es_palindromo('ana'));
console.log(es_palindromo('ximena'));

const http = require('http');

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
        <label for="nombre" class="label">Introduce tu nombre</label>
        <input class="input is-info" type="text" placeholder="Nombre" id="nombre" name="nombre" />
        <br><br>
        <input class="button is-info" type="submit" value="Enviar">
    </form>;


    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="app.js"></script>
</body>

</html>`;

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

server.listen(3000);
