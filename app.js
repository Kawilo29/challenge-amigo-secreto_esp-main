// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let guardarSorteos = []

function agregarAmigo() {
    //Llamamos al input de nombres ingresados
    let agregarNombre = document.getElementById('amigo').value;
    //Verificamos si el campo esta vacío
    if (agregarNombre == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(agregarNombre);
    }
    //Limpiamos lineas HTML y actualizamos lista de amigos
    limpiarCampo();
    limpiarlineasAmigos();
    limpiarlineaResultado()
    actualizarListaAmigos();
    return;
}

function limpiarCampo() {
    document.getElementById('amigo').value = "";
}

function limpiarlineasAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
}

function limpiarlineaResultado() {
    let lista = document.getElementById('resultado');
    lista.innerHTML = ""
}

function actualizarListaAmigos() {
    //For para recorrer el array
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

function sortearAmigo() {
    //verificar si existen datos en array
    if (amigos == "") {
        alert("Debes ingresar nuevos participantes.");
        limpiarlineaResultado()
        console.log(amigos);
    } else {
        //Contamos puestos dentro del array
        let NumeroMaximo = amigos.length;
        //Con número de puestos generamos numero aleatorio
        let numeroSorteo = Math.floor(Math.random()*NumeroMaximo);
        //Con el número aleatorio traemos el nombre sorteado
        let NumeroGanador = amigos[numeroSorteo];
        //Tomar id de linea padre <ul> y crear lineas hijos <li>
        let lineaResultado = document.getElementById('resultado');
        const nuevoElem = document.createElement('li');
        //Se crean la linea <li> para 'resultado'
        nuevoElem.textContent = `El amigo secreto sorteado es: ${NumeroGanador}`;
        //Se declara <ul> como padre de <li>
        lineaResultado.appendChild(nuevoElem);
        //Limpiar lista de amigos en HTML y limpiar array
        limpiarlineasAmigos()
        amigos.length = "";
    }
}