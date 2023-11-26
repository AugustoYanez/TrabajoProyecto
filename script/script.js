document.addEventListener("DOMContentLoaded", function () {
    const comenzarBtn = document.getElementById("comenzarBtn");
    const inicioForm = document.getElementById("inicioForm");

    comenzarBtn.addEventListener("click", function () {
        // Obtener nombres de los jugadores
        const jugador1 = document.getElementById("jugador1").value;
        const jugador2 = document.getElementById("jugador2").value;

        // Verificar la longitud de los nombres
        if (jugador1.length >= 4 && jugador1.length <= 12 && jugador2.length >= 4 && jugador2.length <= 12) {
            // Redirigir a la página de juego
            window.location.href = "juego.html";
        } else {
            alert("Los nombres deben tener entre 4 y 12 caracteres.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // ... (Tu código existente)

    const comoJugarLink = document.getElementById("comoJugarLink");
    const modal = document.getElementById("modal");
    const modalBackground = document.createElement("div");
    modalBackground.className = "modal-background";

    comoJugarLink.addEventListener("click", () => {
        modal.style.display = "block";
        document.body.classList.add("modal-open");
        document.body.appendChild(modalBackground);
    });

    const closeModal = document.getElementById("close-modal");
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        document.body.removeChild(modalBackground);
    });

    modalBackground.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        document.body.removeChild(modalBackground);
    });
});

// Variables globales
let randomNumber; // Número aleatorio a adivinar
let score = 0; // Puntuación del jugador

// Función para generar un número aleatorio entre 1 y 2047
function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 2047) + 1;
}

// Función para convertir un número en su representación binaria usando las cartas
function convertToBinary(number) {
    // Lógica para seleccionar las cartas y sumar sus valores
    // Debes implementar esto según tus cartas
}

// Función para iniciar un nuevo turno
function startTurn() {
    generateRandomNumber();
    // Mostrar el número aleatorio en la pantalla (opcional)
    // Iniciar el temporizador de 30 segundos
}

// Función para manejar la selección de cartas por el jugador
function selectCards() {
    const selectedSum = convertToBinary(selectedNumber);
    if (selectedSum === randomNumber) {
        score++;
    }
    // Actualizar la puntuación en la pantalla
    // Iniciar un nuevo turno
}

// Función para manejar la finalización del juego
function endGame() {
    // Mostrar la puntuación final del jugador
    // Reiniciar la puntuación y ofrecer la opción de volver a jugar
}

// Evento para iniciar el juego cuando se hace clic en "Un Jugador"
document.querySelector(".single-player-btn").addEventListener("click", () => {
    startTurn();
});

// Evento para manejar la selección de cartas por el jugador
// Debes implementar la lógica para esto según tus cartas




