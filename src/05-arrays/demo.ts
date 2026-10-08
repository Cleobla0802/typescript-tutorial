/**
 * 05 - ARRAYS
 *
 * Ejecutar:  npm run play -- src/05-arrays/demo.ts
 */

// ---------- Declaración y tipado ----------
/*
const numeros: number[] = [3, 5, 8, 11];
const numeros2: number[] = [15, 21, 27];

// Array de varios tipos (union type)
const mixto: (number | string)[] = [3, "Jose", 5, "Juan"];
console.log("mixto ->", mixto);

// Array bidimensional
const array2d: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("array2d[0][0] ->", array2d[0][0]);
console.log(`La posición 0 del array numeros es: ${numeros[0]}`);

// ---------- Copiar y unir con spread ----------
const numeros3 = [...numeros, ...numeros2];
console.log("numeros3 ->", numeros3);

numeros3[0] = 10; // spread hace copia: el original NO se toca
console.log("numeros3 modificado ->", numeros3);
console.log("numeros intacto     ->", numeros);
*/
// ---------- OJO: el spread hace una copia SUPERFICIAL ----------
/**
 * Con primitivos (number, string, boolean) la copia es total y segura.
 * Con OBJETOS dentro, el spread copia las REFERENCIAS, no los objetos:
 * el array es nuevo, pero los objetos de dentro son los mismos.
 */
/*
const alumnos = [{ nombre: "Ana" }, { nombre: "Luis" }];
const copiaAlumnos = [...alumnos];

copiaAlumnos[0].nombre = "MODIFICADO"; // tocamos la COPIA...
console.log("original ->", alumnos[0].nombre); // ...y cambia el ORIGINAL ❌

// Para copiar también los objetos de dentro (copia profunda):
const alumnos2 = [{ nombre: "Ana" }, { nombre: "Luis" }];
const copiaProfunda = alumnos2.map((a) => ({ ...a })); // copia cada objeto
copiaProfunda[0].nombre = "MODIFICADO";
console.log("original con copia profunda ->", alumnos2[0].nombre); // "Ana" ✅

// structuredClone() también sirve y funciona a cualquier profundidad
const copiaTotal = structuredClone(alumnos2);
copiaTotal[0].nombre = "OTRO";
console.log("original con structuredClone ->", alumnos2[0].nombre); // "Ana" ✅

// ---------- Añadir y quitar ----------
const anumeros = [1, 3, 5, 7, 9];

anumeros.push(11); // añade al FINAL
console.log("push    ->", anumeros);

anumeros.pop(); // quita del FINAL
console.log("pop     ->", anumeros);

anumeros.push(13, 15, 17); // push admite varios
console.log("push x3 ->", anumeros);

anumeros.unshift(0); // añade al PRINCIPIO
console.log("unshift ->", anumeros);

console.log("shift devuelve ->", anumeros.shift()); // quita del PRINCIPIO y lo devuelve
console.log("shift   ->", anumeros);

// ---------- Acceso y reemplazo ----------
anumeros[0] = -1;
console.log("anumeros[0] ->", anumeros[0]);
console.log("longitud    ->", anumeros.length);
console.log("último      ->", anumeros[anumeros.length - 1]); // -1 porque los índices empiezan en 0
console.log("fuera de rango ->", anumeros[anumeros.length]); // undefined

// ---------- Buscar ----------
const frutas = ["manzana", "pera", "platano", "mandarina", "manzana", "platano"];

console.log("indexOf('platano') ->", frutas.indexOf("platano")); // primera posición, o -1
console.log("includes('pera')   ->", frutas.includes("pera")); // true / false

// find: devuelve el primer ELEMENTO que cumple la condición
console.log(
  "find len>5   ->",
  frutas.find((valor) => valor.length > 5),
);

// findIndex: devuelve la primera POSICIÓN que cumple la condición
console.log(
  "findIndex    ->",
  frutas.findIndex((valor) => valor.length > 5),
);

// ---------- Recorrer ----------
// forEach: ejecuta una función por cada elemento. No devuelve nada.
frutas.forEach((valor: string) => {
  if (valor.length > 5) console.log(`forEach -> ${valor}`);
});

// map: TRANSFORMA cada elemento y devuelve un array NUEVO
const frutasUpper = frutas.map((fruta: string) => fruta.toUpperCase());
console.log("map    ->", frutasUpper);

// filter: se queda con los que cumplen la condición, en un array NUEVO
const frutasFiltradas = frutas.filter((fruta: string) => fruta.length > 6);
console.log("filter ->", frutasFiltradas);

// reduce: ACUMULA todos los elementos en un único valor
const numerosEnteros = [11, 1, 2, 3, 4, 5, 6, 7];
const total = numerosEnteros.reduce((acc: number, actual: number) => acc + actual, 0);
console.log("reduce suma ->", total);

const miNombre = ["Carlos", "Eduardo", "Mendoza", "Ruiz"];
const nombreConcatenado = miNombre.reduce((anterior, actual) => `${anterior} ${actual}`);
console.log("reduce concatenar ->", nombreConcatenado);

// ---------- Ordenar y trocear ----------
// sort MODIFICA el array original. Con números hay que pasarle el comparador.
console.log("sort  ->", [...numerosEnteros].sort((a, b) => a - b));
console.log("slice ->", miNombre.slice(0, 2)); // copia un trozo, no modifica
console.log("join  ->", numeros.join(" ")); // array -> string

export {};
*/
/*
let frutas:string[] = ["manzana","pera","platano","uva"]

console.log(frutas.indexOf("pera")); // Me retorna la posicion de pera, si no esta bien escrito el indexOf te saldra -1
console.log("Jose Antonio Rodriguez".indexOf("J"));
*/
/** Para evitar hacer funciones con tantas lineas se pueden utilizar directamente un metodo find */
/*
function findMia(frutas:string[]):string|undefined {
  for(const elemtno of frutas){
    if (elemtno.length >= 5) {
      return elemtno;
    }
  }
  return undefined
}

console.log(findMia(frutas));

console.log(frutas.findIndex((valor:string)=>{
  return valor.length>=5;
}));

frutas.forEach((valor:string)=>{
  console.log(valor);
})

frutas = frutas.map((valor:string)=>{
  return valor.toUpperCase()
})
console.log(frutas);


let frutas_nuevas = frutas.filter((valor:string)=>{
  return valor.length>5
})
console.log(frutas_nuevas);
*/

// Todo esto se puede hacer en una linea
// console.log(frutas.find((valor:string)=>{return valor}));

/*
let arr:number[] = [1,2,3,4,5,6]

arr.push(7) // Meter un nuevo elemento al final
console.log(arr);

arr.unshift(0) // Meter un nuevo elemento al principio
console.log(arr);

arr.pop() // Quitar elemento del final
arr.shift() // Quitar elemento del principio
console.log(arr);

*/
/*

// Map es una funciona que siempre crea un array nuevo a partir de otro nunca modifica un mismo array siempre crea otro

let numeros = [1,2,3,4,5,6]

let numerosCopia = numeros.map(valor => valor * 2)

console.log(numerosCopia);

*/

let notas:number[] = [2.3,7,5,3,6.8,9.8,4.9]

let aprobados = notas.filter(notas => notas>=5);
console.log(aprobados);

let numerosArray:number[] = [1,2,3,4,5]

let multiplicados = numerosArray.map(numero => numero*2)
console.log(multiplicados);

let cinco:number|undefined = numerosArray.find(numero => numero == 5);

console.log(cinco);
 
const indice = numerosArray.findIndex(numero => numero == 5)
console.log(indice);

numerosArray.includes()
