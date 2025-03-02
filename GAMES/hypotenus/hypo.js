let score = 0;
let legA, legB, correctAnswer;
let timeLeft = 45;  // Increased the time limit to 45 seconds
let timerInterval;

// Function to generate new question
function generateQuestion() {
    // Generate random legs a and b
    legA = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    legB = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

    // Display leg lengths in the question
    document.getElementById("leg-a").textContent = legA;
    document.getElementById("leg-b").textContent = legB;

    // Calculate the correct hypotenuse using Pythagorean theorem
    correctAnswer = Math.sqrt(legA * legA + legB * legB).toFixed(2); // Rounded to 2 decimal places
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById("result").textContent = "Time's up! The correct answer was: " + correctAnswer;
            setTimeout(() => {
                generateQuestion();
                timeLeft = 45;  // Reset to 45 seconds
                document.getElementById("time-left").textContent = timeLeft;
                clearInterval(timerInterval);
                startTimer();
            }, 2000);
        }
    }, 1000);
}

// Function to check the user's answer
document.getElementById("submit-answer").addEventListener("click", function() {
    let userAnswer = parseFloat(document.getElementById("user-answer").value);
    let marginOfError = 0.2; // Define margin for "near the correct answer"

    // Calculate the difference between the user's answer and the correct answer
    let difference = Math.abs(userAnswer - correctAnswer);
    let flooredCorrectAnswer = Math.floor(correctAnswer);  // Floor the correct answer for checking

    // Check if the answer is correct or close enough
    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = `Correct! Well done. (Accurate)`;
        score++;
    } else if (userAnswer === flooredCorrectAnswer) {
        document.getElementById("result").textContent = `Correct (Floored)! Well done. (Accurate)`;
        score++;
    } else if (difference <= marginOfError) {
        document.getElementById("result").textContent = `You're very close! You were off by ${difference.toFixed(2)}. The correct answer is: ${correctAnswer}.`;
        score++;
    } else {
        document.getElementById("result").textContent = `Incorrect. The correct answer was: ${correctAnswer}.`;
    }

    document.getElementById("score-value").textContent = score;
    document.getElementById("user-answer").value = ''; // Clear the input field
    generateQuestion();
});

// Initialize the game
generateQuestion();
startTimer();
