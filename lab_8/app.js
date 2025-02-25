const file_system = require('fs');

//file_system.writeFileSync('hola.txt', 'Hola desde Node'); 

const readline = require('node:readline');

const http = require('http');

const html = "";

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    var miArchivo = file_system.createReadStream("index.html");
    miArchivo.pipe(response);
    //response.write(miArchivo);
    //response.end();
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
function escribir(texto){
    file_system.writeFileSync('ejercicio2.txt', texto); 
}

module.exports = { escribir }
