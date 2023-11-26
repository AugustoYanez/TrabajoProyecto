const cards = document.querySelectorAll('.card');
        const selectButtons = document.querySelectorAll('.select-card');
        const listoButton = document.getElementById('listoButton');
        const terminarButton = document.getElementById('terminarButton');
        const seguirButton = document.getElementById('seguirButton');
        const startButton = document.getElementById('startButton');
        const result = document.getElementById('result');
        const scoreDisplay = document.getElementById('score');
        const roundsDisplay = document.getElementById('rounds');
        let selectedCards = [];
        let timer = 30;
        let numberToGuess = Math.floor(Math.random() * 2047) + 1;
        let countdownInterval;
        let score = 0;
        let rounds = 0;
        let gameStarted = false;
        
        cards.forEach((card, index) => {
            const cardValue = Math.pow(2, index);
            card.addEventListener('click', () => {
                card.classList.toggle('selected');
                const selectedIndex = selectedCards.indexOf(cardValue);
                if (selectedIndex === -1) {
                    selectedCards.push(cardValue);
                } else {
                    selectedCards.splice(selectedIndex, 1);
                }
            });
        });
        
        selectButtons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                const cardValue = Math.pow(2, index);
                const selectedIndex = selectedCards.indexOf(cardValue);
                if (selectedIndex === -1) {
                    selectedCards.push(cardValue);
                    cards[index].classList.add('selected');
                } else {
                    selectedCards.splice(selectedIndex, 1);
                    cards[index].classList.remove('selected');
                }
            });
        });
        
        listoButton.addEventListener('click', () => {
            clearInterval(countdownInterval);
            const selectedSum = selectedCards.reduce((a, b) => a + b, 0);
            if (selectedSum === numberToGuess) {
                result.textContent = `¡Adivinaste el número ${numberToGuess}! Sumas 1 punto.`;
                score++;
            } else {
                result.textContent = `No adivinaste el número ${numberToGuess}. Sumas 0 puntos.`;
            }
            scoreDisplay.textContent = score;
            listoButton.disabled = true;
            terminarButton.disabled = false;
            seguirButton.disabled = false;
        });

        seguirButton.addEventListener('click', () => {
            selectedCards = [];
            cards.forEach((card) => {
                card.classList.remove('selected');
            });
            result.textContent = '';
            rounds++;
            roundsDisplay.textContent = rounds;
            startNewRound();
            terminarButton.disabled = false;
            seguirButton.disabled = true;
        });

        terminarButton.addEventListener('click', () => {
            clearInterval(countdownInterval);
            alert(`Juego terminado. Tu puntuación final es ${score}.`);
            location.reload();
        });
        
        function updateTimer() {
            timer--;
            document.getElementById('timer').textContent = timer;
            if (timer <= 0) {
                listoButton.click();
            }
        }

        function startNewRound() {
            numberToGuess = Math.floor(Math.random() * 2047) + 1;
            result.textContent = '';
            numberToGuessDisplay.textContent = `Número a adivinar: ${numberToGuess}`;
            timer = 30;
            timerDisplay.textContent = timer;
            countdownInterval = setInterval(updateTimer, 1000);
            listoButton.disabled = false;
            terminarButton.disabled = true;
            seguirButton.disabled = true;
        }

        startButton.addEventListener('click', () => {
            if (!gameStarted) {
                gameStarted = true;
                startNewRound();
            }
        });