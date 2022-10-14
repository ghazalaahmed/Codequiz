//Quiz questions, the choices, and the amswers
var questions = [
    {
        question: "What does CSS stand for?",
        choices: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "CSS rules are enclosed with what?",
        chocies: ["< >", "( )", "{ }", "//"],
        answer: "{ }"
    },
    {
        question: "Which symbol is used to separate JavaScript statements?",
        choices: ["Comma", "Colon", "Hyphen", "Semicolon"],
        answer: "Semicolon"
    },
    {
        question: "Opening tag of HTML is called what?",
        choices: ["Ending tag", "Starting tag", "Closed tag", "Pair tags"],
        answer: "Starting tag"
    },
    {
        question: "Which of the following CSS property is used to add shadows to the text?",
        choices: ["Text-shadow", "Text-stroke", "Text-overflow", "Text-decoration"],
        answer: "Text-shadow"
    }
]


//Declaring values and timer functions
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//After start quiz is clicked, timer begins
function start() {
    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        //Once timer stops, the game ends
        if (timeLeft <= 0) {
            clearInterval(timer);
            allDone();
        }

    }, 1000);

    next();
}

// Game is over when all questions are answered or timer reaches 0
function allDone() {
    clearInterval(timer);

    var quizContent = ` 
        <h2>All done!</h2>
        <h3> Your final score is ` + score + ` /100!</h3>
        <h3> you answered `+ score / 22 + ` questions correct!</h3>
        <input type="text" id="name" placeholder="Enter initials">
        <button onclick="submit()">Submit</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}
//Save score in localStorage
function submit() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    submit();
}

function submit() {
    var quizContent = ` 
    <h2> ` + localStorage.getItem("highscoreName") + `Highscore is:</h2>
    <h1> ` + localStorage.getItem("highscore") + `</h1><br>
    <button onclick="resetGame()">Play again!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}


//Reset Quiz
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent = ` 
    <h1>
        Coding Quiz Challenge!
    </h1>
    <h3>
        Click Start Quiz to play!
    </h3>
    button onclick= "start()">Start Quiz</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;

}

//takes away 5 seconds from the timer for wrong answwers
function wrong() {
    timeLeft -=5;
    next();
}

//Score increases by 22 if user gets answer right
function correct() {
    score += 22;
    next()
}
//Function loops through the questions
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endQuiz();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].question + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);

        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "wrong()");
        }
        quizContent += buttonCode
    }

    document.getElementById("quizBody").innerHTML = quizContent;
}







