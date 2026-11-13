/*export{}

interface TareaApi {
  userId:number, 
  id: number,
  title: string,
  completed: boolean
}

type Tarea = Pick<TareaApi, "id"|"title"|"completed">;

async function obtenerTareas(usuario: number):Promise<Tarea[]> {
  const urlTareasApi = "https://jsonplaceholder.typicode.com/todos?userId=";
  let respuesta:Response = await fetch(`${urlTareasApi}${usuario}`);
  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}`);
  }
  let data = await respuesta.json() as TareaApi[];
  //const tareas = data.map((tarea)=>({...tarea as Tarea}))
  const tareas = structuredClone(data as Tarea[])
  return tareas;
}

let tareasCompletadas:Tarea[] = [];

let tareasSinCompletar:Tarea[] = [];

let tareasDeLaApi:Tarea[] = []

obtenerTareas(1).then((tareas)=>{
  tareas.forEach((tarea)=>{tareasDeLaApi.push(tarea)})
  console.log(tareasDeLaApi);
  const tituloMasLargo = tareasDeLaApi.reduce((acumulador,valorActual)=>{return valorActual.title.length>=acumulador.length?valorActual.title:acumulador},"");
  console.log(tituloMasLargo);
}).catch((e:Error)=>{console.log(e.message);
});

obtenerTareas(1).then((tareas)=>{tareas.forEach((tarea)=>{
  tarea.completed===true?tareasCompletadas.push(tarea):"";
})

let resultadoFinal = (tareasCompletadas.length/tareas.length)*100;

console.log(`${resultadoFinal.toFixed(1)}% de tareas completadas`);
}).catch((e:Error)=>{console.log(e.message);});

/*
obtenerTareas(1).then((tareas)=>{tareas.forEach((tarea)=>{
  tarea.completed===false?tareasSinCompletar.push(tarea):"";
})
*/

/*
const topTitulos = [...tareasSinCompletar].slice(0, 3);

let resultadoFinal = (tareasSinCompletar.length/tareas.length)*100;*/
/*
/*
console.log(`${resultadoFinal.toFixed(1)}% de tareas sin completar`);
topTitulos.forEach((tarea)=>{console.log(tarea.title);
})
}).catch((e:Error)=>{console.log(e.message);});
*/
/*
let promesas = Promise.all([obtenerTareas(1),obtenerTareas(2)])

promesas.then((tareas)=>{tareas.forEach((tarea)=>{console.log(tarea);
})})
*/
// obtenerTareas(1).then((tareas)=>{console.log(tareas);}).catch((e:Error)=>{console.log(e.message);});

/*
obtenerTareas(1).then((tareas)=>{tareas.forEach((tarea)=>{
  tarea.completed===false?console.log(tarea):""})
}).catch((e:Error)=>{console.log(e.message);
});

/*
interface Usuario {
    id: number,
    name: string,
    username: string,
    email: string,
    address:  address
}

interface address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geo
}

interface geo {
    lat: string,
    lng: string
}

type EstadoUsuario = ["activo"|"inactivo"];

let URL_API = "https://jsonplaceholder.typicode.com/users";

async function obtenerUsuarios():Promise<Usuario[]>{
    let respuesta = await fetch(URL_API);
    if (!respuesta.ok) {
        throw new Error(`HTTP ERROR ${respuesta.status}`)
    }
    let data = await respuesta.json() as Usuario[];
    return data;
}

obtenerUsuarios().then((datos)=>{console.log(datos);})

async function buscarUsuario(id: number) {
    let respuesta = await fetch(`${URL_API}/${id}`);
    if (!respuesta.ok) {
        throw new Error(`HTTP ERROR ${respuesta.status}`)
    }
    let data = await respuesta.json() as Usuario[];
    return data;
}

buscarUsuario(1).then((datos)=>{console.log(datos);})

async function obtenerNombres() {
    let respuesta = await fetch(URL_API);
    if (!respuesta.ok) {
        throw new Error(`HTTP ERROR ${respuesta.status}`)
    }
    let data:Usuario[] = await respuesta.json() as Usuario[];
    let nombres:string[] = data.map(t=>t.name);
    return nombres;
}

obtenerNombres().then((datos)=>{console.log(datos);})

async function buscarPorNombre(nombre: string) {
    let respuesta = await fetch(URL_API);
    if (!respuesta.ok) {
        throw new Error(`HTTP ERROR ${respuesta.status}`)
    }
    let data:Usuario[] = await respuesta.json() as Usuario[];
    let nombreBuscado = data.find((usuario)=>{usuario.name===nombre})
    return nombreBuscado;
}
buscarPorNombre("Clementina DuBuque").then((usuario)=>{console.log(usuario);})
*/

interface Usuario {
    id: number,
    name: string,
    username: string,
    email: string
    address: address 
}

interface address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geo
}

interface geo {
    lat: string,
    lng: string
}

let arrayUsuario:Usuario[] = [];

const URL_API = "https://jsonplaceholder.typicode.com/users"

async function obtenerUsuarios():Promise<Usuario[]> {
    let respuesta = await fetch(URL_API);
    if (!respuesta.ok) {
        throw new Error(`HTTP ERROR ${respuesta.status}`)
    }
    let data = await respuesta.json() as Usuario[];
    return data;
}

async function buscarPorAltura() {
    
}

obtenerUsuarios().then((usuarios)=>{console.dir(usuarios, {depth: null, colors: true})});