// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
<<<<<<< HEAD
    let agregarNombre = document.getElementById('amigo').value;
    if (agregarNombre == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(agregarNombre);
    }
    limpiarCampo();
    limpiarlineas()
    actualizarListaAmigos()
    return;
}

function limpiarCampo() {
    document.getElementById('amigo').value = "";
}

function limpiarlineas() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
}

function actualizarListaAmigos() {
    
    for (let lecturaArray = 0; lecturaArray < amigos.length; lecturaArray++) {
        //Recorrer el array
        var nuevoDato = amigos[lecturaArray];
        //Tomar id de linea padre <ul> y crear lineas hijos <li>
        let lista = document.getElementById('listaAmigos');
        const nuevoElem = document.createElement('li');
        //Se crean las lineas <li>
        nuevoElem.textContent = nuevoDato;
        //Se declara "Listas" como padre <ul> y se asignan los hijos <li> ya creados
        lista.appendChild(nuevoElem);
    }
}

//function sortearAmigos() {

//}


//agregarAmigo();
//actualizarListaAmigos();
=======
    //let listaNombresPersonas = document.getElementById('amigo');
    let agregarNombre = prompt("Por favor agrega un nombre:");
    if (agregarNombre == "") {
      alerta("Por favor, inserte un nombre.");
    } else {
      listaNombresPersonas.push(agregarNombre);
    }
   // listaNombresPersonas.push(agregarNombre);
    console.log(listaNombresPersonas);
    limpiarCampo()
}

function limpiarCampo() {
  document.getElementById(amigo).value "";
}


function actualizarLista() {
  for 


}


agregarAmigo()

>>>>>>> 75e7e830aaa56095422700e8c7f75baaa9255c8e
