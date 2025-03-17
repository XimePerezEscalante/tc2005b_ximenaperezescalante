// Lab 4: Fundamentos de JavaScript

//Ejercicio 1
function e_uno(){
    let num = prompt("Escribe un número:");
    document.write("Ejercicio 1")
    document.write("<table>")
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>")
    for (let i = 1;i <= num;i++){
        document.write("<tr><td>")
        document.write(i + "</td><td>");
        document.write(i*i + "</td><td>");
        document.write(i*i*i);
        document.write("</td></tr>")
    }
    document.write("</table>")
}

//Ejercicio 2
function e_dos(){
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);
    let fecha = new Date();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let res = prompt("Escribe el resultado de la suma:\n"+ n1 + " + " + n2);
    if (res == n1+n2){
        let fecha2 = new Date();
        let minutosFinal = fecha2.getMinutes();
        let segundosFinal = fecha2.getSeconds();
        if (minutosFinal != minutos){
            console.log("if1");
            if ((minutosFinal - minutos) > 1){
                let total = minutosFinal - minutos;
                console.log("if2");
                alert("¡Muy bien!\nTiempo: " + total + "minutos.");
            }
            else{
                alert("¡Muy bien!\nTiempo: 1 minuto.");
            }
        }
        else{
            console.log("else2");
            let total = segundosFinal - segundos;
            alert("¡Muy bien!\nTiempo: " + total + " segundos.");
        }
    }
    else{
        let fecha2 = new Date();
        let minutosFinal = fecha2.getMinutes();
        let segundosFinal = fecha2.getSeconds();
        if (minutosFinal != minutos){
            console.log("if1");
            if ((minutosFinal - minutos) > 1){
                let total = minutosFinal - minutos;
                console.log("if2");
                alert("Incorrecto\nTiempo: " + total + " minutos.");
            }
            else{
                alert("¡Muy bien!\nTiempo: 1 minuto.");
            }
        }
        else{
            console.log("else2");
            let total = segundosFinal - segundos;
            alert("Incorecto\nTiempo: " + total + " segundos.");
        }
    }
}

//Ejercicio 3

function contador(arreglo){
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for (let numero of arreglo){
        if(numero < 0){
            negativos++;
        }
        else if(numero == 0){
            ceros++;
        }
        else{
            positivos++;
        }
    }
    return ('Negativos: ' + negativos + '  Ceros: ' + ceros + '   Positivos: ' + positivos);
    /* console.log('Negativos: ' + negativos);
    console.log('Ceros: ' + ceros);
    console.log('Positivos: ' + positivos); */
}
console.log(contador([0,-4,3,7,10,-9,0,0,-3]));

//Ejercicio 4

function promedios(matriz){
    let promedio = 0;
    let cont = 0;
    let arreglo_promedios = [];
    for(arreglo of matriz){
        for(numero of arreglo){
            promedio = promedio + numero;
            cont++;
        }
        promedio = promedio / cont;
        arreglo_promedios.push(promedio);
        promedio = 0;
        cont = 0;
    }
    return(arreglo_promedios);
}

console.log(promedios([[10,20,8,5],[31,9,6,2],[7,6,8,3]]));

//Ejercicio 5

function inverso(numero){
    numero = numero.toString();
    let longitud = numero.length - 1;
    let nuevo_numero = '';
    let digito = 0;
    for(let i = 0; longitud >= 0; longitud--){
    
        digito = numero.charAt(longitud);
        nuevo_numero = nuevo_numero + digito;
    }
    return(nuevo_numero);
}

console.log(inverso(911));

//Ejercicio 6 

class Tarea {
    constructor(exercises, questions) {
        this.ejercicios = exercises; //cantidad de ejercicios
        this.preguntas = questions; //cantidad de preguntas
        this.prioridad = this.calcularPrioridad();
        this.tiempo = this.calcularTiempo();
    }

    getEjercicios(){
        return (this.ejercicios);
    }

    getPreguntas(){
        return (this.preguntas);
    }

    getPrioridad(){
        return (this.prioridad);
    }

    getTiempo(){
        return (this.tiempo);
    }

    calcularPrioridad() {
        if (this.ejercicios >= 5 || this.preguntas >= 5) {
            return ("Alta");
        } else if (this.ejercicios >= 3 || this.preguntas >= 3) {
            return ("Media");
        } else {
            return ("Baja");
        }
    }

    calcularTiempo() {
        let time = this.ejercicios * 5 + this.preguntas * 10;
        time = time.toString();
        return time + ' minutos';
    }
}

const labEjemplo = new Tarea(4, 3);

document.getElementById("ejemploE6").innerHTML = `
    <p>Ejercicios: ${labEjemplo.ejercicios}</p>
    <p>Preguntas: ${labEjemplo.preguntas}</p>
    <p>Prioridad: ${labEjemplo.prioridad}</p>
    <p>Tiempo estimado: ${labEjemplo.tiempo}</p>
`;
