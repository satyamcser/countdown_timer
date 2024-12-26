// DOM Elements
const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const countdownDisplay = document.getElementById("countdownDisplay");

let countdownInterval; // To hold the interval ID
let remainingTime = 0; // To track the countdown time

// Function to format time as MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to start the countdown
function startCountdown() {
    // Get input value and validate
    const inputTime = parseInt(timeInput.value);
    if (isNaN(inputTime) || inputTime <= 0) {
        alert("Please enter a valid positive number for the time!");
        return;
    }

    remainingTime = inputTime;
    countdownDisplay.textContent = formatTime(remainingTime);

    // Clear any existing interval
    clearInterval(countdownInterval);

    // Start the interval
    countdownInterval = setInterval(() => {
        remainingTime--;
        countdownDisplay.textContent = formatTime(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "Time's Up!";
        }
    }, 1000);

    // Clear the input field
    timeInput.value = "";
}

// Function to reset the countdown
function resetCountdown() {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = "00:00";
    timeInput.value = "";
}

// Event Listeners
startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);