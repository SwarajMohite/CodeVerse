let score = 0;
let radius, diameter, angle, correctAnswer, questionType;
let timeLeft = 90;  // Start with 90 seconds
let level = 1;  // Start from Easy level
let timerInterval;

// Function to generate a random circle-related question
function generateQuestion() {
    // Randomly decide on the radius and diameter
    radius = Math.floor(Math.random() * 10) + 1;  // Radius between 1 and 10
    diameter = radius * 2;  // Calculate diameter

    // Set random angle for more complex problems (for sectors and arcs)
    angle = Math.floor(Math.random() * 360) + 1;  // Random angle between 1 and 360 degrees

    // Clear the displayed radius and angle initially
    document.getElementById("radius-question").textContent = '';
    document.getElementById("angle-question").textContent = '';

    // Set the level-based question type
    let rand = Math.random();
    if (level === 1) {  // Easy level: Area, Circumference
        if (rand < 0.5) {
            questionType = "circumference";
            correctAnswer = (2 * Math.PI * radius).toFixed(2);  // C = 2πr
            document.getElementById("question-type").textContent = "Find the Circumference (C = 2πr)";
            document.getElementById("radius-question").textContent = `Radius: ${radius}`;
        } else {
            questionType = "area";
            correctAnswer = (Math.PI * radius * radius).toFixed(2);  // A = πr²
            document.getElementById("question-type").textContent = "Find the Area (A = πr²)";
            document.getElementById("radius-question").textContent = `Radius: ${radius}`;
        }
    } else if (level === 2) {  // Medium level: Diameter, Radius from Area
        if (rand < 0.5) {
            questionType = "diameter-from-circumference";
            correctAnswer = (diameter).toFixed(2);  // Diameter from radius
            document.getElementById("question-type").textContent = "Find the Diameter (D = 2r)";
            document.getElementById("radius-question").textContent = `Circumference: ${(2 * Math.PI * radius).toFixed(2)}`;
        } else {
            questionType = "radius-from-area";
            let area = Math.PI * radius * radius;  // Area
            correctAnswer = Math.sqrt(area / Math.PI).toFixed(2);  // Calculate radius from area
            document.getElementById("question-type").textContent = "Find the Radius from the Area";
            document.getElementById("angle-question").textContent = `Area: ${area.toFixed(2)}`;
        }
    } else if (level === 3) {  // Hard level: Sector Area, Arc Length
        if (rand < 0.5) {
            questionType = "sector-area";
            correctAnswer = (0.5 * Math.PI * Math.pow(radius, 2) * (angle / 360)).toFixed(2);  // Sector Area = ½ r² θ
            document.getElementById("question-type").textContent = "Find the Sector Area (A = ½ r² θ)";
            document.getElementById("radius-question").textContent = `Radius: ${radius}`;
            document.getElementById("angle-question").textContent = `Angle: ${angle}°`;
        } else {
            questionType = "arc-length";
            correctAnswer = ((Math.PI * radius * angle) / 180).toFixed(2);  // Arc Length = rθ
            document.getElementById("question-type").textContent = "Find the Arc Length (L = rθ)";
            document.getElementById("radius-question").textContent = `Radius: ${radius}`;
            document.getElementById("angle-question").textContent = `Angle: ${angle}°`;
        }
    }
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
                if (level < 3) level++; // Increase level after time is up
                generateQuestion();
                timeLeft = 90; // Reset to 90 seconds
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
    let marginOfError = 0.2;  // Define margin for "near the correct answer"

    let difference = Math.abs(userAnswer - correctAnswer);

    // Check if the answer is correct
    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "Correct! Well done. (Accurate)";
        score++;
    } else if (difference <= marginOfError) {
        // Provide feedback on how close the answer was
        document.getElementById("result").textContent = `You're very close! You were off by ${difference.toFixed(2)}. The correct answer is: ${correctAnswer}.`;
        score++;
    } else {
        document.getElementById("result").textContent = `Incorrect. The correct answer was: ${correctAnswer}.`;
    }

    document.getElementById("score-value").textContent = score;
    document.getElementById("level-value").textContent = level === 1 ? "Easy" : level === 2 ? "Medium" : "Hard"; // Update level
    document.getElementById("user-answer").value = ''; // Clear input field
    generateQuestion();
});

// Initialize the game
generateQuestion();
startTimer();
