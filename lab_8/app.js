const file_system = require('fs');

//file_system.writeFileSync('hola.txt', 'Hola desde Node'); 

const readline = require('node:readline');

const http = require('http');

const html = "";

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});
server.listen(3000);

//Pregunta 1
const arreglo = [5, 4, 3, 43, 65, 27, 41, 93, 51, 74, 37, 56, 29];
let acum = 0;
for (let elem of arreglo){
    acum = acum + elem;
    console.log(acum);
}

//Pregunta 2
//let oracion = prompt("Escribe algo para que salga en un archivo nuevo:")