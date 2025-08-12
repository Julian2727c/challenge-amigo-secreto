// Declarar el array 
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {

    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim();
    console.log(`Nombre ingresado: ${nombre}`);

    // 2. Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
asignarTextoElemento("#tituloAmigos", "Ingrese el nombre de sus amigos");


    // 3. Agregar el nombre al array amigos
    amigos.push(nombre);
    // 4. Limpiar el campo de entrada
    input.value = "";
    // 5. Actualizar la lista en pantalla
    mostrarLista();
}
// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);

        // Mostrar en consola cada amigo agregado
        //console.log(`Amigo registrado: ${amigos[i]}`);
    }
}
// Función para sortear un amigo al azar
function sortearAmigo() {
    // 1. Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    // 2. Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // 3. Obtener el nombre sorteado
    let nombreSorteado = amigos[indiceAleatorio];
    // 4. Mostrar el resultado en el elemento correspondiente
    let resultado = document.getElementById("resultadoSorteo");
    resultado.innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;
}
// Función para limpiar la lista de amigos
function limpiarLista() {
    // 1. Limpiar el array amigos
    amigos = [];
    // 2. Limpiar la lista en pantalla
    mostrarLista();
    // 3. Limpiar el resultado del sorteo
    let resultado = document.getElementById("resultadoSorteo");
    resultado.innerHTML = "";
}