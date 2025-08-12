# 🎁 Juego de Amigo Secreto

Este proyecto es una aplicación web sencilla para organizar un sorteo de **Amigo Secreto**, donde los participantes se agregan a una lista y luego se sortean sin repeticiones, mostrando el resultado en pantalla.

## 🚀 Tecnologías utilizadas
- **HTML** → estructura del contenido.
- **CSS** → estilos y diseño visual.
- **JavaScript → lógica de la aplicación e interacción con el DOM.

## 🛠️ Funcionalidades implementadas

### 1. `agregarAmigo()`
- Captura el nombre escrito en el campo de texto.
- Valida que el campo no esté vacío.
- Agrega el nombre a la lista `amigos`.
- Actualiza visualmente la lista en pantalla.

### 2. `mostrarLista()`
- Limpia el contenido actual del listado.
- Recorre el array `amigos` y crea elementos `<li>` para cada participante.
- Numera automáticamente a cada participante usando el índice del array.

### 3. `sortearAmigo()`
- Sortea un nombre al azar de la lista `amigosDisponibles` (para evitar repeticiones).
- Muestra el nombre sorteado en el área de resultado.
- Elimina al participante sorteado de la lista de disponibles.
- Muestra un `alert` cuando ya no hay más amigos para sortear.

### 4. `limpiarLista()` *(opcional)*
- Vacía el array `amigos` y limpia la lista visual y el resultado.


## 📸 Ejemplo de uso
1. Escribir el nombre de un participante en el campo de texto.
2. Pulsar **"Añadir"** para agregarlo a la lista.
3. Repetir hasta ingresar todos los participantes.
4. Pulsar **"Sortear amigo"** para elegir un participante aleatorio.
5. El sistema seguirá sorteando hasta que no haya más nombres.

## 📌 Requisitos
- Un navegador moderno (Chrome, Firefox, Edge, Safari).
- No se necesita instalación, basta abrir `index.html`.

## 👨‍💻 Autor
Proyecto desarrollado con fines educativos

