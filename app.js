    let amigos = [];
    let amigosDisponibles = [];

    // Agregar amigo
    function agregarAmigo() {
        const input = document.getElementById("nombreInput");
        const nombre = input.value.trim();
        console.log(`nombre ingresado: ${nombre}`)

        if (nombre === "") {
            alert("Por favor, ingresa un nombre.");
            return;
        }

        amigos.push(nombre);
        input.value = "";
        mostrarLista();

        // Actualizamos la lista de disponibles
        amigosDisponibles = [...amigos];
    }

    // Mostrar la lista en pantalla
    function mostrarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }
    // Sortear amigo
function sortearAmigo() {
    if (amigosDisponibles.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigosDisponibles.length);
    const nombreSorteado = amigosDisponibles[indice];

    // Eliminarlo de la lista de disponibles
    amigosDisponibles.splice(indice, 1);

    // Mostrar el resultado temporalmente en pantalla
    const resultado = document.getElementById("resultadoSorteo");
    resultado.innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;

    // Registrar en la consola (historial)
    console.log(`Amigo sorteado: ${nombreSorteado}`);

    // 🔹 Borrar el mensaje después de 3 segundos
    setTimeout(() => {
        resultado.innerHTML = "";
    }, 3000);
}