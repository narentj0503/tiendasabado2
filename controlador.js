
/*
var nombre ="James Rodriguez"; //variable global

if(5>2)
{
 var nombre="Lucho Diaz" //variable de bloque
}

console.log ("Hola "+nombre) //imprimiendo la global

let libros=["la maria","12 cuentos peregrinos"]

let libro={nombre:"la maria",autor:"Jorge Isaacs",precio:2000}

let biblioteca=
[
    {nombre:"la maria",autor:"Jorge Isaacs",precio:2000},
    {nombre:"12 cuentos peregrinos",autor:"Gabriel Garcia Marquez",precio:90000}
]
*/

import {productos} from "./baseDatos.js"
let fila=document.getElementById("fila")
//recorriendo un arreglo
productos.forEach(function(producto){
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid")
    foto.src=producto.foto

    //padres e hijos
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
