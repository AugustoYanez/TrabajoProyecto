document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const selectButtons = document.querySelectorAll(".select-card");
    const listoButton = document.getElementById("listoButton");
    const result = document.getElementById("result");
    const startButton = document.getElementById("startButton");
    const numberToGuessDisplay = document.getElementById("numberToGuess");
    const timerDisplay = document.getElementById("timer");
    const scoreDisplay = document.getElementById("score");
    let selectedCards = [];
    let timer = 30;
    let numberToGuess = 0;
    let countdownInterval;
    let gameStarted = false;
    let score = 0;
    let roundCount = 0;

    function updateTimer() {
        timer--;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdownInterval);
            endGame("Perdiste");
        }
    }

    function startGame() {
        if (!gameStarted) {
            gameStarted = true;
            numberToGuess = Math.floor(Math.random() * 2047) + 1;
            numberToGuessDisplay.textContent = `Número a adivinar: ${numberToGuess}`;
            timer = 30; // Reiniciar el temporizador
            timerDisplay.textContent = timer;
            countdownInterval = setInterval(updateTimer, 1000);
            selectedCards = []; // Resetear cartas seleccionadas
            cards.forEach((card) => {
                card.classList.remove("selected");
            });
            startButton.disabled = true;
            listoButton.disabled = false;
        }
    }

    function endGame(message) {
        gameStarted = false;
        clearInterval(countdownInterval);
        result.textContent = message;
        result.className = message === "¡Adivinaste el número!" ? "win-message" : "lose-message";
        startButton.disabled = false;
        listoButton.disabled = true;
    
        // Incrementa el número de rondas cada vez que se termina un juego
        roundCount++;
        document.getElementById("roundCount").textContent = roundCount;
    
        if (message === "¡Adivinaste el número!") {
            score++;
        }
        scoreDisplay.textContent = score;
    }
    

    startButton.addEventListener("click", startGame);

    listoButton.addEventListener("click", () => {
        const sumOfSelectedCards = selectedCards.reduce((a, b) => a + b, 0);
        if (sumOfSelectedCards === numberToGuess) {
            endGame("¡Adivinaste el número!");
        } else {
            endGame("Perdiste");
        }
    });

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (gameStarted) {
                const cardValue = parseInt(card.getAttribute("data-value"));
                const selectedIndex = selectedCards.indexOf(cardValue);
                if (selectedIndex === -1) {
                    selectedCards.push(cardValue);
                    card.classList.add("selected");
                } else {
                    selectedCards.splice(selectedIndex, 1);
                    card.classList.remove("selected");
                }
            }
        });
    });
});
