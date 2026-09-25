
 /**
 * 01 - DECLARACIÓN DE VARIABLES: var, let y const
 *
 * Ejecutar:  npm run play -- src/01-variables/demo.ts
 */
/*
// ---------- const ----------
// Ámbito de bloque. No se puede reasignar. Debe inicializarse.
const nombre = "Fran";
console.log(`const nombre = ${nombre}`);
// nombre = "Otro";   // Error: Cannot assign to 'nombre' because it is a constant.

// ---------- var vs let: ámbito ----------
if (true) {
  var conVar = "Maria"; // ámbito de FUNCIÓN (o de módulo si está fuera de una función)
  let conLet = "Jose"; // ámbito de BLOQUE: solo existe dentro de estas llaves
  console.log(`dentro del if -> conLet = ${conLet}`);
}

// `conVar` sigue accesible fuera del if porque var ignora el bloque.
conVar = "Pepito";
console.log(`fuera del if  -> conVar = ${conVar}`);

// console.log(conLet);  // Error: Cannot find name 'conLet'.
*/
/**
 * OJO con la palabra "global":
 * este fichero es un MÓDULO (tiene import/export o el proyecto usa ESM),
 * así que `var` NO crea una variable global de verdad: se queda dentro del módulo.
 * En un script clásico de navegador sí colgaría de `window`.
 */
/*
// ---------- Hoisting ----------
// `var` se "eleva" al principio: la DECLARACIÓN sube, el VALOR no.
// Por eso leerla antes de asignarla da `undefined` en vez de un error.
var tardia;
console.log(`hoisting de var  -> ${tardia}`); // undefined
tardia = "ya tengo valor";
console.log(`tras asignar     -> ${tardia}`);

// let y const también se elevan, pero quedan en la "temporal dead zone":
// leerlas antes de declararlas es un error de EJECUCIÓN.
// console.log(tardiaLet);   // ReferenceError: Cannot access 'tardiaLet' before initialization
let tardiaLet = "hola";
console.log(`let tras declarar -> ${tardiaLet}`);

// ---------- Redeclaración ----------
var repetida = "A";
var repetida = "B"; // permitido con var
console.log(`var redeclarada -> ${repetida}`);

let noRepetible = "A";
// let noRepetible = "B";   // Error: Cannot redeclare block-scoped variable.
console.log(`let no se redeclara -> ${noRepetible}`);
*/

/**
   * REGLA PARA EL CURSO (y para Angular):
   * usa `const` por defecto y `let` solo si necesitas reasignar. `var` no se usa.
    export {};
*/

let nombre = "Cristian";
var apellido = "León";

const DNI = "00000000T"

if (nombre=="Cristian") {
  
}


let array = ["posicion 0", "posicion 1", "posicion 0"]

console.log(array);

// console.log(array.length()); // Error length es una propiedad no una funcion "length()"

console.log(array.length);

const objeto = {nombre: "Ana", edad: 20}

console.log(objeto);

array.push(objeto.nombre)

console.log(array);

// console.log(objeto.length); // Error property 'length' does not exist on type '{ nombre: string; edad: number; }'.

// Typescript te permite acceder a una variable antes de ser inicializada

// Una funcion se puede llamar desde antes de si quiera hacerse

holamundo(); // Funciona perfectamente

function holamundo() {
  console.log("hola mundo"); 
}

// La diferencia entre any y unknown es que typescript siempre te obligara a comprobar el tipo antes
// Any siempre se declara de forma explicita nunca implicita

let desconocido:unknown = "Cristian"

if (typeof desconocido == "string") { // Esto puede valer para una funcion generica
  console.log(desconocido.toUpperCase()); 
}

let cualquiera:any = "Cristian"

console.log(cualquiera.toUpperCase());

// Void se utiliza para indicar que una funcion no va a retornar nada es el por defecto de las funciones

let nada:void 

function saludo() {
  console.log("hola mundo");
  if (1) {
    return "hola"
  } else {
    return 2
  }
}

console.log(saludo());

// Tambien existe el tipo never el cual se utiliza para indicar que algo nunca termina como una funcion
// Si tiene fin la funcion sale esto A function returning 'never' cannot have a reachable end point.

/*function saludo2(): never {
  console.log("hola mundo");
  while (true) {
    console.log("hola");
  }
}*/

// Si queremos crear una variable y no podemos inicializarla de primeras por el motivo que sea se asigna null
// se utiliza la "|" para indicar que puede ser de 2 tipos la variable
// Se tiene que verificar tambien si la variable es de tipo diferent a nulo

  let hola:string|null=null
  hola = "h"

  console.log(hola);  


// Como concepto lo que tiene de diferente null con undefined es que undefined es que la variable todavia no tiene valor
// Null significa que ese valor esta vacio

let hola3:string|undefined = undefined

hola3 = "hola"

console.log(hola3.toUpperCase());

// Concatenar

let palabra = "palabra"

// Utilizamos la comilla al lado de la p para poder concatenar 
// (se utilizan mucho en angular)
console.log(`Hola ${palabra}`);
console.log(`Hola ${1 + 2}`);
// Tambien se puede utilizar el operador ternario
let edad = 18;
console.log(`Hola ${edad==18?"Mayor":"Menor"}`);
// Incluso llamadas a funciones (se utilizan mucho en angular)
function nombre2():string {
  return "Jose antonio"
}

console.log(`Hola ${nombre2()}`);

console.log(`Hola ${nombre2}`); // Esto es lo que pasa cuando no llamas bien a la funcion

// Operadores

// AND
console.log(true&&false);

// OR
console.log(true||false);

// Negacion
console.log(!false);

// Modulo
console.log(1%10);

// Potencia
console.log(1**10);

// Incremento y decremento
let edad2 = 5;
console.log(edad2++); // Asi hace que muestre antes la variable y despues aumente
console.log(edad2);

console.log(++edad2);

console.log(edad2--); // Asi hace que muestre antes la variable y despues aumente
console.log(edad2);

console.log(--edad2);

// Interfaces

interface Usuario { // Los nombres de las interfaces empiezan con mayuscula
  nombre:string;
  edad:number;
  dni?:string; // La ? para hacerlo opcional
}

let u1:Usuario = {nombre:"Jose", edad:400}