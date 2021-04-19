// --- VARIABLES ---

const buttons = ['qc_btnA', 'qc_btnB', 'qc_btnC', 'qc_btnD'];    //IDs of the answer buttons.

let currentCategory;                //Quiz category selection number - corresponds to opentdb.com php call.
let currentDifficulty;              //Quiz difficulty selector - easy, medium, hard or all levels.
let MAX_QUESTION;                   //How many questions per round.
let questionSet = [];               //Array of objects that holds the converted JSON question set from opentdb.com.
let currentQuestionNumber;          //Pointer for which question the player is on, from 1 to MAX_QUESTION inclusive.
let currentQuestion = "";           //String for current question to be displayed.
let currentCorrectAnswer = "";      //String for current correct answer.
let currentAnswerArray = [];        //Array of four randomized strings for possible answers.
let currentScore;                   //Current game score (number)
let gameReady = false;              //Boolean to prevent an answer button being overclicked.

// --- FUNCTIONS TO RUN ON LOADING THE PAGE ---

window.onload = function() {
    // Function call to pull quiz categories from OpenTDB.com
    getCategories();
    
    // Function call to hide show the start screen.
    startScreen();                

    // --- EVENT LISTENER FOR START BUTTON ---
    document.getElementById('startGame').addEventListener('click', function(){
        startGame();
    });

    // --- EVENT LISTENER FOR ANSWER BUTTONS ---
    // buttons is array of IDs of HTML answer button elements, ['qc_btnA', 'qc_btnB', 'qc_btnC', 'qc_btnD']
    buttons.forEach(button => document      
        .getElementById(button)
        .addEventListener('click', () => whichButton(button))
    );

    // --- EVENT LISTENER FOR PLAY AGAIN BUTTON ---
    document.getElementById('qc_playAgain').addEventListener('click', function(){
        startScreen();
    });

};

// --- FETCH CATEGORIES AND PUT IN HTML OPTIONS DROPDOWN ---
//Fetch the available categories from OpenTDB.com.
function getCategories(){fetch('https://opentdb.com/api_category.php')  
    //Promise: Isolate JSON data from the response.
    .then(result => result.json())                                      
    //Promise: call the categoryJSONtoHTMLOptions function.
    .then(data => categoryJSONToHTMLOptions(data));                     
}

// Function to convert the returned JSON object to a HTML option list. Argument of the JSON category object taken.
function categoryJSONToHTMLOptions(opentdbCategoriesObject) {
    //New array opentdbCategoriesArray is assigned to the trivia_categories array value.
    let opentdbCategoriesArray = opentdbCategoriesObject.trivia_categories;
    //Another new array categoryArray is mapped to the values of the opentdbCategories array.
    var categoryArray = opentdbCategoriesArray.map( function(category) {   
        var item = {
            "id": category.id,
            "name": category.name
            }
        return item;
    });

    //New string htmlCategoryList is created by mapping data from the categoryArray by looping through each element while adding the HTML tags.
    var htmlCategoryList = categoryArray.map(function (item) {              
        return '<option value="' + item.id + '"> ' + item.name + '</option>';  
    }).join('');
    //An all categories option is prepended and set to selected to the string.
    htmlCategoryList = '<option value="All" selected>All Categories</option>' + htmlCategoryList;
    //This string is inserted to the HTML categories list in index.html.
    document.getElementById('qc_category').innerHTML = htmlCategoryList;   
}

// --- START GAME FUNCTION ---

function startGame() {
    //Initialize Variables
    currentQuestionNumber = 1;
    currentScore = 0;
    gameReady = false;

    //Pull selected values from HTML Page
    MAX_QUESTION = document.getElementById('qc_numQuestions').value;
    currentCategory = document.getElementById('qc_category').value;
    currentDifficulty = document.getElementById('qc_difficulty').value;

    //Creating Strings for sending to OpenTDB in fetch command.
    //Number of Questions that we want for the game.
    let numQuestionsString = "amount=" + MAX_QUESTION;
    //The category selector for the game.
    let categoryString = "";
    if (currentCategory === "All"){
        categoryString = "";
    } else if (typeof(parseInt(currentCategory)) === 'number') {
        categoryString = "&category=" + currentCategory;
    } else {
        categoryString ="ERROR";
    }
    //The difficulty selction of the game.
    let difficultyString = "";
    if (currentDifficulty === "All"){
        difficultyString = "";
    } else if ((currentDifficulty === 'easy') || (currentDifficulty === 'medium') || (currentDifficulty === 'hard')) {
        difficultyString = "&difficulty=" + currentDifficulty;
    } else {
        difficultyString ="ERROR";
    }
    //Call the getQuestions function with the assembled strings.
    getQuestions(numQuestionsString, categoryString, difficultyString);
}



// --- FETCH QUESTIONS AND PUT IN AN ARRAY ---
// Function to format a template literal from the user selection on the start screen and fetch the relevant JSON from opentdb.com.
function getQuestions(numQuestionsString, categoryString, difficultyString){fetch(`https://opentdb.com/api.php?`+ numQuestionsString + categoryString + difficultyString +`&type=multiple`)  
    //Promise: Isolate JSON data from the response.
    .then(result => result.json())                                      
    //Promise: call the categoryJSONtoHTMLOptions function.
    .then(data => questionJSONtoArray(data));                          
}

// Function to convert the returned JSON object to a HTML option list. Argument of the JSON category object taken.
function questionJSONtoArray(opentdbQuestionObject) {
    //New array opentdbCategoriesArray is assigned to the trivia_categories array value.
    let opentdbQuestionArray = opentdbQuestionObject.results;   
    //Another new array categoryArray is mapped to the values of the opentdbCategories array.
    var questionArray = opentdbQuestionArray.map( function(questions) {   
        var item = {
            "q": questions.question,
            "a_correct": questions.correct_answer,
            "a_incorrect": questions.incorrect_answers
            };
        return item;
    });
    // questionSet is an array of objects question/answer objects used by the quiz game.
    questionSet = questionArray;   
    updateScore();
    updateQuestionNumber();
    nextQuestion();
    questionScreen();
}

// --- NEXT QUESTION FUNCTION ---
function nextQuestion(){
    if(currentQuestionNumber <= MAX_QUESTION){
        resetButtonColors();
        currentQuestion = questionSet[currentQuestionNumber-1].q;
        currentAnswerArray = [...questionSet[currentQuestionNumber-1].a_incorrect, questionSet[currentQuestionNumber-1].a_correct];
        currentAnswerArray.sort(() => Math.random() - 0.5);    //courtesy of Eddie Kumar (https://stackoverflow.com/questions/53591691/sorting-an-array-in-random-order)
        currentCorrectAnswer = questionSet[currentQuestionNumber-1].a_correct;
        printQuestion(currentQuestion, currentAnswerArray[0], currentAnswerArray[1], currentAnswerArray[2], currentAnswerArray[3]);
        updateQuestionNumber();
        gameReady = true;
        currentQuestionNumber++;
    } else {
        //console.log("No more questions");
        finalScore();
    }
}

// --- CAPTURE WHICH ANSWER BUTTON IS CLICKED ---
// --- courtesy of timmy_i_chen   https://replit.com/@timmy_i_chen/EnchantingSilverTerabyte
function whichButton(button) {
    let selectedAnswer = document.getElementById(button).innerText;
    if (gameReady) {
        if (selectedAnswer === currentCorrectAnswer) {
            document.getElementById(button).classList.add("qc_questionBtnCorrect");
            currentScore++;
            gameReady = false;
            soundCorrect();
            updateScore();
            setTimeout(() => { nextQuestion(); }, 1000);
        } else {
            document.getElementById(button).classList.add("qc_questionBtnIncorrect");
            gameReady = false;
            soundIncorrect();
            updateScore();
            setTimeout(() => { findCorrectAnswer(); }, 1000);
            setTimeout(() => { nextQuestion(); }, 2000);
        }
    } else {
        return;
    }
}

// --- FUNCTION TO FIND THE CORRECT ANSWER BUTTON AND ADD 'CORRECT' STYLE CLASS
function findCorrectAnswer() {
    let correctAnswer = currentCorrectAnswer;   //temporary variable assigned to the current correct answer.
    let answerArray = currentAnswerArray;       //temporary variable assigned to the array of answers after randomisation.
    let buttonIDs = buttons;                    //temporary variable assigned to the array of button IDs.
    for (let i = 0; i < 4; i++) {                   //For each answer button from index 0 to 3..
        if(correctAnswer === answerArray[i]) {  // ..check if the button answer is equal to the correct answer..
            document.getElementById(buttonIDs[i]).classList.add('qc_questionBtnCorrect');  // ..add the 'correct' styling class to this button. 
        }
    }
}

// ---  UPDATE THE SCORE ---
function updateScore() {
    let scoreText = document.getElementById('qc_questionNum');
    scoreText.innerHTML = "Score: " + currentScore;
}

// ---  UPDATE THE QUESTION NUMBER ---
function updateQuestionNumber() {
    let questionNumberText = document.getElementById('qc_score');
    questionNumberText.innerHTML = "Question: " + currentQuestionNumber + " / " + MAX_QUESTION;
}

// --- PRINT A QUESTION AND ANSWERS TO THE GAME SCREEN
// --- BUGFIX - Text strings are written to .innerHTML rather than textContent due to HTML special character codes being displayed.
function printQuestion(questionText, answerAText, answerBText, answerCText, answerDText) {
    let question = document.getElementById('qc_txtQuestion');
    question.innerHTML = questionText;
    let answerA = document.getElementById('qc_txtAnswerA');
    answerA.innerHTML = answerAText;
    let answerB = document.getElementById('qc_txtAnswerB');
    answerB.innerHTML = answerBText;
    let answerC = document.getElementById('qc_txtAnswerC');
    answerC.innerHTML = answerCText;
    let answerD = document.getElementById('qc_txtAnswerD');
    answerD.innerHTML = answerDText;
}

// --- FIND ANY BUTTONS STYLED AS CORRECT OR INCORRECT AND REMOVE THE STYLE CLASSES ---
function resetButtonColors() {
    let correctButtons = document.getElementsByClassName('qc_questionBtnCorrect');
    for(let i = 0; i < correctButtons.length; i++) {
        correctButtons[i].classList.remove('qc_questionBtnCorrect');
    }
    let incorrectButtons = document.getElementsByClassName('qc_questionBtnIncorrect');
    for(let i = 0; i < incorrectButtons.length; i++) {
        incorrectButtons[i].classList.remove('qc_questionBtnIncorrect');
    }
}

// --- FINAL SCORE FUNCTION ---
function finalScore() {
    let finalScoreText = "Your final score is " + currentScore + " / " + MAX_QUESTION + " questions correct.";
    let scorePercentage = (currentScore/MAX_QUESTION) * 100;
    scorePercentage = scorePercentage.toFixed(2);
    let finalScorePercentage = "You got " + scorePercentage + "% of the questions right.";
    document.getElementById('qc_finalScore').textContent = finalScoreText;
    document.getElementById('qc_finalPercent').textContent = finalScorePercentage;
    scoreScreen();
}

// --- FUNCTIONS TO HIDE SCREEN ELEMENTS ---
function startScreen() {
    document.getElementById('qc_startScreen').classList.remove('qc_hide');
    document.getElementById('qc_questionScreen').classList.add('qc_hide');
    document.getElementById('qc_scoreScreen').classList.add('qc_hide');
}

function questionScreen() {
    document.getElementById('qc_startScreen').classList.add('qc_hide');
    document.getElementById('qc_questionScreen').classList.remove('qc_hide');
    document.getElementById('qc_scoreScreen').classList.add('qc_hide');
}

function scoreScreen() {
    document.getElementById('qc_startScreen').classList.add('qc_hide');
    document.getElementById('qc_questionScreen').classList.add('qc_hide');
    document.getElementById('qc_scoreScreen').classList.remove('qc_hide');
}


// ----------------------------------------------------------------------------------------------------------------------------------
//                                         COLOR EFFECTS
// ----------------------------------------------------------------------------------------------------------------------------------

function colorMode() {
    // --- Change the logo background image ---
    document.getElementById('qc_logo').classList.remove('qc_logobgHighContrast');
    document.getElementById('qc_logo').classList.add('qc_logobgColor');
}

function highContrastMode() {
    // --- Change the logo background image ---
    document.getElementById('qc_logo').classList.add('qc_logobgHighContrast');
    document.getElementById('qc_logo').classList.remove('qc_logobgColor');
}

//-----------------------------------------------------------------------------------------------------------------------------------
// --- AUDIO EFFECTS ---
//-----------------------------------------------------------------------------------------------------------------------------------

// Credit:  Code here modified from answer by Uri (https://stackoverflow.com/users/378594/uri) in question 9419263 (https://stackoverflow.com/questions/9419263/how-to-play-audio)

function soundCorrect() {
    //let audio = new Audio('../audio/335908__littlerainyseasons__correct.mp3');
    //audio.play();
    //let audio1 = new Audio('../assets/audio/335908__littlerainyseasons__correct.mp3');
    //audio1.play();
    let audio2 = new Audio('../QuizChallenge/assets/audio/335908__littlerainyseasons__correct.mp3');
    audio2.play();
}

function soundIncorrect() {
    //let audio = new Audio('../audio/196106_aiwha_ding.mp3');
    //audio.play();
    //let audio1 = new Audio('../assets/audio/196106_aiwha_ding.mp3');
    //audio1.play();
    let audio2 = new Audio('../QuizChallenge/assets/audio/196106_aiwha_ding.mp3');
    audio2.play();
}
