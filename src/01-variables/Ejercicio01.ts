const nombreCentro:string = "IES Los Alcores — Desarrollo de Aplicaciones Multiplataforma";
const plazasTotales:number = 30;
let alumnosMatriculados:number = 26;

console.log(`${nombreCentro}`);
console.log(`Matriculados: ${alumnosMatriculados} de ${plazasTotales}`);
console.log(`Plazas libres: ${plazasTotales-alumnosMatriculados}`);
alumnosMatriculados+=2;
console.log(`Tras dos altas -> ${alumnosMatriculados} matriculados, ${plazasTotales-alumnosMatriculados} libres`);
const ocupacion = (alumnosMatriculados / plazasTotales) * 100;
console.log(`Ocupacion: ${ocupacion.toFixed(1)}%`);
console.log(plazasTotales > alumnosMatriculados ? "Quedan plazas":"No quedan plazas");
type grupo = {nombreGrupo:string, tutor:string}
const grupo = {nombreGrupo:"DAM2",tutor:"Carlos"}
grupo.tutor = "Ana Serrano";
console.log(`Grupo ${grupo.nombreGrupo}, tutor: ${grupo.tutor}`);

