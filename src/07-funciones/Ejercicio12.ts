/*import { error } from "console";

class Expediente {
    private static creados = 0;

    constructor(public readonly numero:number, public nombre:string, public notas:number[]=[]) {}

    static registrar(nombre:string) {
        Expediente.creados++;
        let notas:number[]=[];
        let nuevoExpediente = new Expediente(1000+this.creados,nombre,notas)
        return nuevoExpediente;
    }
    
    static get Total() {
        return this.creados;
    }
    
    public anadirNota(nota:number){
        if(nota > 10) throw error("Nota fuera de rango:"+nota);
        if(nota < 0) throw error("Nota fuera de rango"+nota);
        this.notas.push(nota);     
    }

    
    public get media() {
        if(this.notas.length === 0){
            return 0;
        } else {
            let media:number = this.notas.reduce((acumulador,valorActual)=>{return acumulador+valorActual},0)
            media /= this.notas.length;
            return media.toFixed(2);
        }
    }
    
    public get calificacion(){
        let nota = "INSUFICIENTE";
        if (Number(this.media) > 5) {
            nota = "SUFICIENTE"
        }else{
            nota = "INSUFICIENTE";
        }
        return nota;
    }
    
    public get historial() {
        let copiaNotas = structuredClone(this.notas);
        return copiaNotas;
    }
}

const expedientes:Expediente[] = [new Expediente(1, "Ana serrano"), new Expediente(2, "Luis Gil")];

<<<<<<< HEAD
*/
=======
expedientes[0].anadirNota(8);
expedientes[0].anadirNota(9.5);
expedientes[0].anadirNota(7);

let copiaHistorialAna = expedientes[0].historial;
copiaHistorialAna.push(10);

expedientes[1].anadirNota(4);

console.log(`Expediente ${expedientes[0].numero} - ${expedientes[0].nombre}`);
console.log(`Notas: ${expedientes[0].notas}`);
console.log(`Media ${expedientes[0].media} (${expedientes[0].calificacion})`);

console.log(`Expediente ${expedientes[1].numero} - ${expedientes[1].nombre}: ${expedientes[1].calificacion}`);
console.log(`Expedientes creados: ${expedientes.length}`);

copiaHistorialAna.push(10);
console.log(`Historial real tras tocar la copia: ${expedientes[0].notas.length} notas`);
// console.log(`Rechazado -> $${expedientes[0].anadirNota(15)}`);

// expedientes[0].notas.push(15);
// expedientes[0].numero = 9999; Cannot assign to 'numero' because it is a read-only property. 
>>>>>>> 9be1435c9a53dddb908dd1e8f040bc15f787357d
