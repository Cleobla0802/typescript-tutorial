function calificar(nota:number) {
    switch (true) {
        case nota>=9 && nota<11:
            return "Sobresalientes";
            break;
        case nota>=7 && nota<9:
            return "Notable";
            break;
        case nota>=6 && nota<7:
            return "Bien";
            break;
        case nota>=5 && nota<6:
            return "Suficiente";
            break;
        case nota<5 && nota>=0:
            return "Insuficiente"
            break;
        default:
            return "Tiene que estar la nota entre 0 y 10"
            break;
    }
}

function convocatoria(mes:string) {
    mes = mes.toLowerCase();
    switch (true) {
        case mes === "marzo":
            return "Primera evaluacion inicial"
        case mes === "junio":
            return "Ordinaria";
        case mes === "septiembre":
            return "Extraordinaria";
        default:
            return "Este mes no tiene convocatoria";
    }
}

let aprobados:number;
let suspensos:number;

const notas1:number[] = [10, 8.5, 6.2, 5, 3.4, 11];

const notas2:number[] = [4, 7, 10, 6, 10];

const meses:string[] = [];

notas1.forEach((nota:number) => {
    console.log(`${nota} -> ${calificar(nota)}`);    
})

