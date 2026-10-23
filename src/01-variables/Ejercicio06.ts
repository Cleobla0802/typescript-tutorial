type Ficha = [nombre: string, nota: number];

const fichas: Ficha[] = [
  ["Ana", 8.5],
  ["Luis", 4],
  ["Marta", 9.25],
  ["Pedro", 6],
];

fichas.forEach(([nombre, nota])=>{
    console.log(`${nombre.padEnd(6)} ${nota} -> ${nota>=5?"APTO":"NO APTO"}`);
});



/*
function resumen(listaFichas:Ficha[]) {
    
    let media:number, aprobados:number, suspensos:number;

    media = listaFichas.reduce((acumulador, valorActual)=>{return acumulador+valorActual.nota},0);
    aprobados = listaFichas.reduce((acumulador,valorActual)=>{return valorActual.nota>=5? acumulador + 1:acumulador},0)
    aprobados = listaFichas.reduce((acumulador,valorActual)=>{return valorActual.nota<5? acumulador + 1:acumulador},0)


}*/