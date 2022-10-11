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
        question: "Which symbol is used to separate JavaScript statements?"
        choices: ["Comma", "Colon", "Hyphen", "Semicolon"],
        answer: "Semicolon"
    },
    {
        question: "Opening tag of HTML is called what?"
        choices: ["Ending tag", "Starting tag", "Closed tag", "Pair tags"],
        answer: "Starting tag"
    },
    {
        question: "Which of the following CSS property is used to add shadows to the text?"
        choices: ["Text-shadow", "Text-stroke", "Text-overflow", "Text-decoration"],
        answer: "Text-shadow"
    }
]


//Declaring the values and timer functions
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//Timer begins after start button is clicked
function start() {
    timeleft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function) {
        timeleft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        //After time runs out, game is over
        if (timeLeft <= 0) {
            clearInterval(timer);
            endquiz();
        }

    }, 1000);

    next();
}

//Game ends when timer reaches 0 or when all questions are answered
function endGame() {
    clearInterval(timer);

    var quizContent =
    <h2>All Done!</h2>
    <h3>You got a score of ' + score + ' /100!</h3>
    <h3>That means you got '+ score/ 22 + ' questions correct!</h3>
    <input type= "text" id="name" placeholder="Enter initials">  
    element.addEventListener("click",)

    document.getElementById("quizBody").innerHTML = quizContent;

}

//Save in local storage
function setScore() {
    localStorage.setItem("highscore" , score);
    localStorage.setItem("highscoreName" , document.getElementById('name').value);
    getScore();

    addEventListener

    ;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//clears the score name and value in localStorage if user selects "go back"
function goBack() {
    localStorage.setItem("highscore", " ");
    localStorage.setItem("highscoreName", " ");

    resetGame();
}

//Reset the quiz
function resetGame() {
    clearInterval(timer);
    score = 0
    currentQuestion = -1
    timeleft = 0
    timer = null;

    document.getElementById("timerLeft").innerHTML = timeLeft;

    var quizContent = ' 
    <h1>
        Coding Quiz Challenge!
    </h1>
    <h3>
        Start Quiz!
    </h3>
    addEventListener

    document.getElementById("quizBody").innerHTML = quizContent;

}

//Deduct 15 seconds from the timer if user guesses wrong
function wrong() {
    timeLeft -=15;
    next();
}
// This fucntion loops through the questions
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length -1) {
        endGame();
        return;
    }
    var quizContent  = "<h2" + questions[currentQuestion].question + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {        
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";         
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);        
        
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {           
             buttonCode = buttonCode.replace("[ANS]", "correct()");        
        }   else { 
               buttonCode = buttonCode.replace("[ANS]", "wrong()");       
             }        
             quizContent += buttonCode   
    }
    
    document.getElementById("quizBody").innerHTML = quizContent;
}

