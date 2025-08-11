// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresPersonas = []
let nombreAmigo = ""
let agregarNombre = ""


function agregarAmigo() {
    //let listaNombresPersonas = document.getElementById('amigo');
    let agregarNombre = prompt("Por favor agrega un nombre:");
    listaNombresPersonas.push(agregarNombre);
    console.log(listaNombresPersonas);
}

agregarAmigo()