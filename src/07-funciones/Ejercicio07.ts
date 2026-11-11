
async function getData(url: string, id: number): Promise<string> {
    let respuesta = await fetch(`${url}${id}`)
    if (!respuesta.ok) {
        throw new Error("Error en la peticion");
    }
    let data = await respuesta.json() as string;
    return data;
}
let urlapi:string = "https://jsonplaceholder.typicode.com/posts/";

getData(urlapi,1).then((datos)=>{console.log(datos);}).catch((error)=>{console.log(error);
});