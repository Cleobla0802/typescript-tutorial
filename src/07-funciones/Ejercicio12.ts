import { error } from "console";

class Expediente {
    private static creados = 0;

    constructor(public readonly numero:number, public nombre:string, public notas:number[]=[]) {}

    static registrar(nombre:string) {
        this.creados + 1;
        let notas:number[]=[];
        let nuevoExpediente = new Expediente(1000+this.creados,nombre,notas)
        return nuevoExpediente;
    }
    
    static get Total() {
        return this.creados;
    }
    
    anadirNota(nota:number){
        if(nota > 10) throw error("Nota fuera de rango:"+nota);
        if(nota < 0) throw error("Nota fuera de rango"+nota);
        this.notas.push(nota);     
    }

    
    public get media() {
        if(this.notas.length === 0){
            return 0;
        }
        return this.notas;
    }
    
    public get calificacion(){
        let nota = "INSUFICIENTE";
        if (this.media > 5) {
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


