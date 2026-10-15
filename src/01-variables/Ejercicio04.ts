let clase:string[] = ["Ana","Luis","Marta"];
console.log(`Inicial -> ${clase}`);

clase.push("Pedro", "Lucía");
console.log(`Tras 2 altas -> ${clase}`);

clase.unshift("Carlos");
console.log(`Tras traslado -> ${clase}`);

clase.shift();
console.log(`Tras la baja de carlos -> ${clase}`);

console.log(`¿Esta Marta? -> ${clase.includes("Marta")}`);

console.log(`¿Esta Marta? -> ${clase.includes("Sofia")}`);

console.log(`Posicion de Lucía -> ${clase.findIndex((persona)=>{return persona === "Lucía"})}`);

console.log(`Posicion de Sofía -> ${clase.findIndex((persona)=>{return persona === "Sofía"})}`);

let claseClon:string[] = [...clase];
claseClon.sort();
console.log(`Alfabético -> ${claseClon}`);

console.log(`Original -> ${clase}`);

let paraElActa = clase.map((persona)=>{return persona.toUpperCase()})
console.log(`Para el acta -> ${paraElActa}`);

let masDeCuatro = clase.filter((persona)=>{return persona.length > 4});
console.log(`Nombre > 4 letras -> ${masDeCuatro}`);

console.log(`Listado: ${clase.join(", ")}`);
