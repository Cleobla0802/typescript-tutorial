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
            return "Nota no valida"
            break;
    }
}

function convocatoria(mes:string) {
    mes = mes.toLowerCase();
    switch (true) {
        case mes === "marzo":
            return "Primera evaluacion inicial"
        case mes === "junio":
            return "Convocatoria ordinaria";
        case mes === "septiembre":
            return "Convocatoria extraordinaria";
        default:
            return "Este mes no tiene convocatoria";
    }
}

const notas1:number[] = [10, 8.5, 6.2, 5, 3.4, 11];

const notas2:number[] = [4, 7, 10, 6, 10];

const meses:string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

notas1.forEach((nota:number) => {
    console.log(`${nota} -> ${calificar(nota)}`);    
})

console.log(`Mes ${meses.findIndex((mes)=>{return mes.toLowerCase() === "junio"})+1} -> ${convocatoria("junio")}`);

console.log(`Mes ${meses.findIndex((mes)=>{return mes.toLowerCase() === "septiembre"})+1} -> ${convocatoria("septiembre")}`);

console.log(`Mes ${meses.findIndex((mes)=>{return mes.toLowerCase() === "diciembre"})+1} -> ${convocatoria("diciembre")}`);

let aprobados:number = 0;
let suspensos:number = 0;

for (const nota of notas1){
    if (nota > 10) continue
    nota>=5 ? aprobados++:suspensos++;
}

console.log(`Aprobados ${aprobados} | suspensos ${suspensos}`);

