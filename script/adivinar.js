const numeroUsuarioInput = document.getElementById('numeroUsuario');
const carruselDiv = document.getElementById('carrusel');
const resultadoParrafo = document.getElementById('resultado');
const iniciarButton = document.getElementById('iniciarButton');
const siButton = document.getElementById('siButton');
const noButton = document.getElementById('noButton');
const volverAJugarButton = document.getElementById('volverAJugarButton');

let numeroUsuario;
let totalSeleccionado = 0;
let cartas = [];
let indiceCartaActual = 0;
let juegoIniciado = false;
let roundCount = 0;

iniciarButton.addEventListener('click', iniciarCarrusel);
siButton.addEventListener('click', () => procesarRespuesta(true));
noButton.addEventListener('click', () => procesarRespuesta(false));
volverAJugarButton.addEventListener('click', reiniciarJuego);

function iniciarCarrusel() {
    // Obtener el número ingresado por el usuario
    numeroUsuario = parseInt(numeroUsuarioInput.value);

    // Validar que el número esté en el rango correcto
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 255) {
        alert('Ingresa un número válido del 1 al 255.');
        return;
    }

    // Ocultar el input y el botón de iniciar
    numeroUsuarioInput.style.display = 'none';
    iniciarButton.style.display = 'none';

    // Cambiar el texto del label
    document.querySelector('label[for="numeroUsuario"]').textContent = 'INTENTANDO ADIVINAR EL NÚMERO';

    // Mostrar el texto "TRATANDO DE ADIVINAR EL NUMERO QUE ELEGISTE..."
    resultadoParrafo.textContent = 'TRATANDO DE ADIVINAR EL NÚMERO QUE ELEGISTE...';

    // Generar las cartas del carrusel en orden desde 1 hasta 8
    cartas = [];
    for (let i = 1; i <= 8; i++) {
        const valor = Math.pow(2, i - 1);
        cartas.push(valor);
    }

    // Mostrar la primera carta del carrusel
    mostrarCartaActual();
    juegoIniciado = true;
}

function mostrarCartaActual() {
    carruselDiv.innerHTML = '';
    const img = document.createElement('img');
    img.src = `assets/img/Cartas/Cartas2/${cartas[indiceCartaActual]}.png`; // Reemplaza con la ruta real de tus imágenes
    img.style.width = '300px'; // Ajusta el tamaño según tus necesidades
    carruselDiv.appendChild(img);

    // Mostrar el texto "APARECE TU NUMERO?" y los botones SI y NO
    resultadoParrafo.textContent = '¿APARECE TU NÚMERO?';
    siButton.style.display = 'inline-block';
    noButton.style.display = 'inline-block';
}

function procesarRespuesta(respuesta) {
    const cartaSeleccionada = cartas[indiceCartaActual];

    // Sumar el valor de la carta seleccionada si la respuesta es SI
    if (respuesta) {
        totalSeleccionado += cartaSeleccionada;
    }

    // Pasar a la siguiente carta o mostrar el resultado final
    indiceCartaActual++;

    if (indiceCartaActual < cartas.length) {
        mostrarCartaActual();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    // Ocultar los botones SI y NO
    siButton.style.display = 'none';
    noButton.style.display = 'none';

    // Mostrar el resultado final y el botón para volver a jugar
    resultadoParrafo.textContent = `EL NUMERO INGRESADO ES: ${totalSeleccionado}`;
    volverAJugarButton.style.display = 'inline-block';
}

function reiniciarJuego() {
    // Restablecer variables y mostrar nuevamente el input y el botón de iniciar
    numeroUsuarioInput.value = '';
    numeroUsuarioInput.style.display = 'inline-block';
    iniciarButton.style.display = 'inline-block';
    resultadoParrafo.textContent = '';
    volverAJugarButton.style.display = 'none';
    totalSeleccionado = 0;
    indiceCartaActual = 0;
    juegoIniciado = false;

    // Reiniciar el texto del label
    document.querySelector('label[for="numeroUsuario"]').textContent = 'Ingresa un número del 1 al 255:';

    // Ocultar la última imagen
    carruselDiv.innerHTML = '';
}
