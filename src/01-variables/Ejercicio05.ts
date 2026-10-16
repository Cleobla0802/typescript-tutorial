let notas:number[] = [7, 4.5, 9.25, 6, 3, 8, 10, 5.5];
let media = notas.reduce((notaPrevia,notaActual)=>{
    return notaActual + notaPrevia;
})
media/=notas.length;
console.log(`Media del grupo: ${media.toFixed(2)}`);

let maxima = notas.reduce((notaPrevia,notaActual)=>{return notaActual>notaPrevia ? notaActual:notaPrevia});
let minima = notas.reduce((notaPrevia,notaActual)=>{return notaActual<notaPrevia ? notaActual:notaPrevia});
console.log(`Maxima ${maxima} | Minima ${minima}`);

let aprobados2 = notas.reduce((acumulador,nota)=>{return nota>=5 ? acumulador+1:acumulador},0);
let suspensos2 = notas.reduce((acumulador,nota)=>{return nota<5 ? acumulador+1:acumulador},0)
console.log(`Aprobados: ${aprobados2} | Suspensos: ${suspensos2}`);

console.log(`Porcentaje de aprobados: ${((aprobados2/notas.length)*100).toFixed(1)} %`);

let masCeroConCinco:number[] = notas.map((nota)=>{return nota===10 ? nota:nota+0.5});
console.log(masCeroConCinco);

console.log(notas);

type notasObjeto = {sobresaliente:number,notable:number,suficiente:number,insuficiente:number}
let notaObjeto:notasObjeto = {sobresaliente:0,notable:0,suficiente:0,insuficiente:0}

let recuento = notas.reduce((acumulador:notasObjeto, notaActual)=>{
    switch (true) {
        case notaActual>=9 && notaActual < 11:
            acumulador.sobresaliente+=1;
            break;

        case notaActual>=7&&notaActual<=8:
            acumulador.notable+=1;
            break;

        case notaActual>=5&&notaActual<=6:
            acumulador.suficiente+=1;
            break;

        case notaActual<5:
            acumulador.insuficiente+=1;
            break;
    }
    return acumulador;
},notaObjeto)

console.log(notaObjeto);

const top3 = [...notas].sort((a,b)=>b-a).slice(0,3);
console.log(top3);
