/*const tren:string[] = ["vagon1","vagon2","vagon3"]
console.log(tren);


tren.unshift("maquinaria")
console.log(tren);

tren.push("ultimo_vagon")
console.log(tren);

tren.pop()
console.log(tren);

tren.shift()
console.log(tren);
*/
/**                          */
/*
const filaEspera: string[] = []

filaEspera.push("Ana")
console.log(filaEspera);

filaEspera.push("Carlos")
console.log(filaEspera);

filaEspera.push("Diana")
console.log(filaEspera);

const atendido1:string|undefined = filaEspera.shift()
console.log(filaEspera);
console.log(`El que ha sido antendido ${atendido1}`);

filaEspera.unshift("Rey")
console.log(filaEspera);
*/
/**     */             
/*
let cajaFuerte = [50, 100, 200]

console.log(cajaFuerte);

let ultimo:number|undefined = cajaFuerte.pop()

let primero:number|undefined = cajaFuerte.shift()

cajaFuerte.unshift(ultimo!) // Al meter un valor en un array puede ser que typescript considere que puede ser indefinido ese valor
// Asi que para ello tendremos que utilizar la ! si estamos seguros de que va a tener un valor definido o meterlo en un if else

cajaFuerte.push(primero!)

console.log(cajaFuerte);
*/

/* let resultado = array.reduce((acumulado, actual) => {
    return acumulado + actual;
}, 0); // <-- Este 0 es el valor inicial */



let numeros = [1,2,3,4,5,6]

numeros.map(valor => valor * 2)

console.log(numeros);
