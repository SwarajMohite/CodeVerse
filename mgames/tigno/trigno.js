let score = 0;
let timeLeft = 180;  // Time limit set to 3 minutes (180 seconds)
let level = 1;  // Game starts from Easy level
let correctAnswer, questionType, hintMessage, explanationMessage;
let timerInterval;

let questions = [
    {
        type: 'sine',
        question: 'Find sin(θ) if θ = 30°',
        correctAnswer: Math.sin(30 * Math.PI / 180).toFixed(2),
        hint: 'Hint: sin(θ) = opposite/hypotenuse',
        explanation: 'sin(30°) = 1/2 = 0.5'
    },
    {
        type: 'cosine',
        question: 'Find cos(θ) if θ = 60°',
        correctAnswer: Math.cos(60 * Math.PI / 180).toFixed(2),
        hint: 'Hint: cos(θ) = adjacent/hypotenuse',
        explanation: 'cos(60°) = 1/2 = 0.5'
    },
    {
        type: 'tangent',
        question: 'Find tan(θ) if θ = 45°',
        correctAnswer: Math.tan(45 * Math.PI / 180).toFixed(2),
        hint: 'Hint: tan(θ) = opposite/adjacent',
        explanation: 'tan(45°) = 1/1 = 1'
    },
    {
        type: 'height-distance',
        question: 'A building has a height of 20 meters. The angle of elevation from a point 30 meters away from the base is 30°. Find the height of the building.',
        correctAnswer: (30 * Math.tan(30 * Math.PI / 180)).toFixed(2),
        hint: 'Hint: tan(θ) = height/distance',
        explanation: 'tan(30°) = height/30, hence height = 30 * tan(30°) = 30 * 0.577 = 17.31 meters'
    },
    {
        type: 'identity',
        question: 'Simplify: cos²(θ) + sin²(θ)',
        correctAnswer: '1',
        hint: 'Hint: Use Pythagorean identity: cos²(θ) + sin²(θ) = 1',
        explanation: 'cos²(θ) + sin²(θ) = 1 for all values of θ'
    },
    {
        type: 'elevation-depression',
        question: 'A person is looking at the top of a tower at an angle of elevation of 45°. If the height of the tower is 10 meters, find the distance of the person from the tower.',
        correctAnswer: (10 / Math.tan(45 * Math.PI / 180)).toFixed(2),
        hint: 'Hint: tan(θ) = height/distance, hence distance = height / tan(θ)',
        explanation: 'tan(45°) = 10/distance, hence distance = 10/tan(45°) = 10 meters'
    }
];

// Function to generate a random trigonometry question from the available questions
function generateQuestion() {
    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    
    questionType = randomQuestion.type;
    correctAnswer = randomQuestion.correctAnswer;
    hintMessage = randomQuestion.hint;
    explanationMessage = randomQuestion.explanation;
    
    document.getElementById("question-type").textContent = randomQuestion.question;
    document.getElementById("additional-info").textContent = '';  // Reset extra info if needed
    document.getElementById("hint").style.display = 'none';  // Hide hint by default
    document.getElementById("explanation").style.display = 'none';  // Hide explanation by default
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
                if (level < 3) level++;  // Increase level after time is up
                generateQuestion();
                timeLeft = 240;  // Reset to 4 minutes
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
    let marginOfError = 0.1;  // Allowable margin of error
    let resultMessage = '';
    let closeMessage = '';
    
    if (Math.abs(userAnswer - correctAnswer) <= marginOfError) {
        resultMessage = "Correct!";
        score++;
    } else {
        resultMessage = `Incorrect. The correct answer was: ${correctAnswer}.`;
        if (Math.abs(userAnswer - correctAnswer) <= 0.05) {
            closeMessage = `You're very close! Your answer was off by just ${Math.abs(userAnswer - correctAnswer).toFixed(2)}.`;
        }
    }

    document.getElementById("result").textContent = resultMessage;
    if (closeMessage) {
        document.getElementById("result").textContent += " " + closeMessage;
    }

    document.getElementById("explanation").textContent = explanationMessage;
    document.getElementById("explanation").style.display = 'block';

    document.getElementById("score-value").textContent = score;
    document.getElementById("level-value").textContent = level === 1 ? "Easy" : level === 2 ? "Medium" : "Hard";
    document.getElementById("user-answer").value = '';  // Clear input field
    generateQuestion();
});

// Show hint when requested
document.getElementById("hint-button").addEventListener("click", function() {
    document.getElementById("hint").textContent = hintMessage;
    document.getElementById("hint").style.display = 'block';
});

// Initialize the game
generateQuestion();
startTimer();
