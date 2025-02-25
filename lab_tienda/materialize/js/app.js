/* 

const file_system = require('fs');

const readline = require('node:readline');

const http = require('http');

const html = "Hola";

const { open } = require('node:fs/promises');

const Readable = require('stream').Readable;


leer = async () => {
  const file = await open('/Users/ximenaperezescalante/tc2005b_ximenaperezescalante/lab_tienda/index.html');
  let nuevoFile = "";
  const s = new Readable();
  s._read = () => {}; // redundant? see update below
  
  for await (const line of file.readLines()) {
    //console.log(line);
    s.push(line);
  } 
  await file.close();
  console.log(s);
  let s2 = Buffer.from("Node.js");
  console.log(s2.toString());
};

const server = http.createServer( (request, response) => {
  if (request.method == "GET" && (request.url == "/talla" || request.URL == "/")){
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
  }
  else if (request.method == "POST" && request.URL == "/talla"){

  }
  else{
    const archivo = leer;
    //response.write(archivo);
    console.log(archivo);
    response.write('El sitio no existe');
    response.end();
  }
});
server.listen(3000);  */







const file_system = require('fs');

//file_system.writeFileSync('hola.txt', 'Hola desde Node'); 

const readline = require('node:readline');

const http = require('http');

const html = "";

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    var miArchivo = file_system.createReadStream("/Users/ximenaperezescalante/tc2005b_ximenaperezescalante/lab_tienda/index.html");
    miArchivo.pipe(response);
    //response.write(miArchivo);
    //response.end();
});
server.listen(3000);













// Constantes
const descuento = 0.30;
const iva = 0.16;

// Productos (objetos)
const tenis_spring = {
  nombre:"Tenis Primavera con Charm",
  precio:1500,
  talla:"N/A",
  unidades:0,
};

const chamarra_el = {
  nombre:"Chamarra Polar Elegante",
  precio:1000,
  color:"azul",
  talla:"N/A",
  unidades:0,
};

const falda_b2s = {
  nombre:"Falda Tea Time",
  precio:500,
  color:"verde",
  talla:"N/A",
  unidades:0,
};

//Constructores
function TenSpring(num,qty){
  this.nombre = "Tenis Primavera con Charm";
  this.precio = 1500;
  this.talla = num;
  this.unidades = qty;
}

function ChamEl(sze,qty){
  this.nombre = "Chamarra Polar Elegante";
  this.precio = 1000;
  this.color = "azul";
  this.talla = sze;
  this.unidades = qty;
};

function FalB2s(sze,qty){
  this.nombre = "Falda Tea Time";
  this.precio = 500;
  this.color = "verde";
  this.talla = sze;
  this.unidades = qty;
};

// Metodos de productos
function calc_descuento(producto){
  console.log(producto.precio);
  precio_des = producto.precio - (producto.precio * descuento);
  return precio_des;
}

function calc_subtotal(producto){
  console.log(producto.precio);
  const precio_fin = calc_descuento(producto) * producto.unidades;
  return precio_fin;
}

function calc_iva(subtotal){
  const total = subtotal + (subtotal * iva);
  return total;
}

// Arreglo del carrito
const carrito = [];

//Toast agregado al carrito
let toast_carrito = '<span>Se añadió un artículo al carrito</span><button class="btn-flat toast-action" onclick=undo_addToCart()>Deshacer</button>';

//Funciones boton para agregar al carrito
function add_to_cart(){
  M.toast({html: toast_carrito});
}

function undo_addToCart(){
  carrito.pop();
  M.toast({html: 'Se eliminó el artículo del carrito'});
}

function func(){
  var tam_zap = document.getElementById('calzado_tam').value;
  var opciones = document.getElementById("calzado_tams").options;
  var zap_valido = false;
  console.log(opciones[0].value);
  for (var index = 0; index < opciones.length; index++)
    if (tam_zap == opciones[index].value)
      zap_valido = true;
      const cant = document.getElementById("quantityTSPRING").value;
      const producto_nuevo = new TenSpring(tam_zap,cant);
      carrito.push(producto_nuevo);
      console.log(carrito);
      add_to_cart();
  if (zap_valido == false)
    alert("Escoge una opción válida");
  console.log(tam_zap);
  console.log(zap_valido);
}

//Validar input seleccion de productos

function validar_input(id_lista,id_input,id_qty,producto){
  let valor_input = document.getElementById(id_input).value;
  let lista = document.getElementById(id_lista).options;
  let art_valido = false;
  console.log(lista[0].value);
  for (let index = 0; index < lista.length; index++){
    if (valor_input == lista[index].value){
      art_valido = true;
      const cant = document.getElementById(id_qty).value;
      if (producto == "tenis_spring"){
        const producto_nuevo = new TenSpring(valor_input,cant);
        carrito.push(producto_nuevo);
      }
      else if (producto == "chamarra_el"){
        const producto_nuevo = new ChamEl(valor_input,cant);
        carrito.push(producto_nuevo);
      }
      else if (producto == "falda_b2s"){
        const producto_nuevo = new FalB2s(valor_input,cant);
        carrito.push(producto_nuevo);
      }
      console.log(carrito);
      add_to_cart();
    }
  } 
  if (art_valido == false){
    alert("Selecciona una opción de la lista");
  }
  console.log(valor_input);
  console.log(art_valido);

}

function precio_old_f(x, producto){
  x.style.color = "#e9967a";
  x.innerHTML = "$" + producto.precio + " MXN";
  x.style.textDecoration = "line-through";
}

function precio_discount_f(x, producto){
  x.style.color = "white";
  nuevo_precio = calc_descuento(producto);
  x.innerHTML = "$" + nuevo_precio + " MXN";
  x.style.textDecoration = "initial";
}

function show_materiales(){
  let x = document.getElementById('materiales');
  x.innerHTML = "Poliester<br>Nylon<br>Tela";
}

function hide_materiales(){
  let x = document.getElementById('materiales');
  x.innerHTML = "";
}





function desplegar_carrito(id_bloque,id_colProd,id_colPrecios,id_main){
  if (carrito.length == 0){
    M.toast({html: 'Tu carrito está vacío'});
  }
  else{
    let bloque = document.getElementById(id_bloque);
    let colProd = document.getElementById(id_colProd);
    let colPrecios = document.getElementById(id_colPrecios);
    document.getElementById(id_main).style.display = "none";
    bloque.style.display = "inline";
    bloque.style.visibility = "visible";
    //cuadro.innerHTML = carrito[0].nombre + " " + carrito[0].precio + " " + carrito[0].unidades;
    for (let index = 0; index < carrito.length; index++){
      colProd.innerHTML = "<h5>" + carrito[index].unidades + " x " + carrito[index].nombre + " " + carrito[index].talla + "</h5>";
      let subT = calc_subtotal(carrito[index]);
      const total = calc_iva(subT);
      colPrecios.innerHTML = "<strong>Subtotal <em>(Descuento 30%):</em><strong><br><h6>$" + subT + " MX</h6><br><em>+ IVA (16%):</em><br><h5><strong>Total: $" + total + " MXN</strong><h5>";
      // console.log(carrito[index].nombre + " " + carrito[index].precio + " " + carrito[index].unidades);
    }
    
  }
}
  







