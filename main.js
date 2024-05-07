document.addEventListener("DOMContentLoaded", () => {
    const timerDisplay = document.getElementById("timer-display");
    const startPauseButton = document.getElementById("start-pause-button");
    const resetButton = document.getElementById("reset-button");

    let timer = null;
    let isRunning = false;
    let minutes = 25;
    let seconds = 0;

    function updateDisplay() {
        const minuteStr = String(minutes).padStart(2, '0');
        const secondStr = String(seconds).padStart(2, '0');
        timerDisplay.textContent = `${minuteStr}:${secondStr}`;
    }

    function startTimer() {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
            startPauseButton.textContent = "Start";
        } else {
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        alert("Pomodoro session complete! Take a break.");
                    } else {
                        minutes--;
                        seconds = 59;
                    }
                } else {
                    seconds--;
                }
                updateDisplay();
            }, 1000);
            isRunning = true;
            startPauseButton.textContent = "Pause";
        }
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        minutes = 25;
        seconds = 0;
        updateDisplay();
        startPauseButton.textContent = "Start";
    }

    startPauseButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);

    updateDisplay(); // Initialize the display
});
