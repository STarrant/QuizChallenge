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
  getCategories();              // Function call to pull quiz categories from OpenTDB.com
  startScreen();                // Function call to hide show the start screen.
};

// --- FETCH CATEGORIES AND PUT IN HTML OPTIONS DROPDOWN ---

function getCategories(){fetch('https://opentdb.com/api_category.php')  //Fetch the available categories from OpenTDB.com.
    .then(result => result.json())                                      //Promise: Isolate JSON data from the response.
    .then(data => categoryJSONToHTMLOptions(data));                          //Promise: call the categoryJSONtoHTMLOptions function.
}

function categoryJSONToHTMLOptions(opentdbCategoriesObject) {           // Function to convert the returned JSON object to a HTML option list. Argument of the JSON category object taken.
    let opentdbCategoriesArray = opentdbCategoriesObject.trivia_categories;   //New array opentdbCategoriesArray is assigned to the trivia_categories array value.
    var categoryArray = opentdbCategoriesArray.map( function(category) {   //Another new array categoryArray is mapped to the values of the opentdbCategories array.
        var item = {
            "id": category.id,
            "name": category.name
            }
        return item;
    });

    var htmlCategoryList = categoryArray.map(function (item) {              //New string htmlCategoryList is created by mapping data from the categoryArray by looping through each element while adding the HTML tags.
        return '<option value="' + item.id + '"> ' + item.name + '</option>';  
    }).join('');
    htmlCategoryList = '<option value="All" selected>All Categories</option>' + htmlCategoryList;  //An all categories option is prepended and set to selected to the string.
    document.getElementById('qc_category').innerHTML = htmlCategoryList;   //This string is inserted to the HTML categories list in index.html.
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
document.getElementById('qc_startGame').addEventListener('click', function(){
    startGame();
});

function getQuestions(numQuestionsString, categoryString, difficultyString){fetch(`https://opentdb.com/api.php?`+ numQuestionsString + categoryString + difficultyString +`&type=multiple`)  //Fetch XXXXXX questions from OpenTDB.com.
    .then(result => result.json())                                      //Promise: Isolate JSON data from the response.
    .then(data => questionJSONtoArray(data));                          //Promise: call the categoryJSONtoHTMLOptions function.
}

function questionJSONtoArray(opentdbQuestionObject) {           // Function to convert the returned JSON object to a HTML option list. Argument of the JSON category object taken.
    let opentdbQuestionArray = opentdbQuestionObject.results;   //New array opentdbCategoriesArray is assigned to the trivia_categories array value.
    var questionArray = opentdbQuestionArray.map( function(questions) {   //Another new array categoryArray is mapped to the values of the opentdbCategories array.
        var item = {
            "q": questions.question,
            "a_correct": questions.correct_answer,
            "a_incorrect": questions.incorrect_answers
            };
        return item;
    });
    questionSet = questionArray;   // questionSet is an array of objects question/answer objects used by the quiz game.
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
        console.log("No more questions");
        finalScore();
    }
}

// -------------  LET'S TRY AND CAPTURE WHICH BUTTON IS CLICKED ---------------------------
// --- courtesy of timmy_i_chen   https://replit.com/@timmy_i_chen/EnchantingSilverTerabyte
function whichButton(button) {
    console.log("Button " + button + " was clicked.");
    let selectedAnswer = document.getElementById(button).innerText;
    console.log(selectedAnswer);
    if (gameReady) {
        if (selectedAnswer === currentCorrectAnswer) {
            console.log("You're right!");
            document.getElementById(button).classList.add("qc_questionBtnCorrect");
            currentScore++;
            gameReady = false;
            updateScore();
            setTimeout(() => { nextQuestion(); }, 2000);
        } else {
            console.log("Nice try...");
            document.getElementById(button).classList.add("qc_questionBtnIncorrect");
            gameReady = false;
            updateScore();
            setTimeout(() => { findCorrectAnswer(); }, 1000);
            setTimeout(() => { nextQuestion(); }, 2000);
        }
    } else {
        return;
    }
}
// --- EVENT LISTENER FOR ANSWER BUTTONS ---
buttons.forEach(button => document      // buttons is array of IDs of HTML answer button elements, ['qc_btnA', 'qc_btnB', 'qc_btnC', 'qc_btnD']
    .getElementById(button)
    .addEventListener('click', () => whichButton(button))
);


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
    console.log('Start printAnswers()'); //To_be_deleted.
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
    console.log(correctButtons);
    for(let i = 0; i < correctButtons.length; i++) {
        correctButtons[i].classList.remove('qc_questionBtnCorrect');
    }
    let incorrectButtons = document.getElementsByClassName('qc_questionBtnIncorrect');
    console.log(incorrectButtons);
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

document.getElementById('qc_playAgain').addEventListener('click', function(){
    startScreen();
});

// --- FUNCTIONS TO HIDE SCREEN ELEMENTS ---

function startScreen() {
    document.getElementById('qc_startScreen').classList.remove('qc_hide');
    document.getElementById('qc_questionScreen').classList.add('qc_hide');
    //document.getElementById('qc_questionScreenRow').classList.add('qc_hide');
    document.getElementById('qc_scoreScreen').classList.add('qc_hide');
    console.log('Function startScreen()');
    console.log(document.getElementById('qc_startScreen').classList);
    console.log(document.getElementById('qc_questionScreen').classList);
    console.log(document.getElementById('qc_scoreScreen').classList);
}

function questionScreen() {
    document.getElementById('qc_startScreen').classList.add('qc_hide');
    document.getElementById('qc_questionScreen').classList.remove('qc_hide');
    //document.getElementById('qc_questionScreenRow').classList.remove('qc_hide');
    document.getElementById('qc_scoreScreen').classList.add('qc_hide');
    console.log(document.getElementById('qc_startScreen').classList);
    console.log(document.getElementById('qc_questionScreen').classList);
    console.log(document.getElementById('qc_scoreScreen').classList);
}

function scoreScreen() {
    document.getElementById('qc_startScreen').classList.add('qc_hide');
    document.getElementById('qc_questionScreen').classList.add('qc_hide');
    //document.getElementById('qc_questionScreenRow').classList.add('qc_hide');
    document.getElementById('qc_scoreScreen').classList.remove('qc_hide');
    console.log(document.getElementById('qc_startScreen').classList);
    console.log(document.getElementById('qc_questionScreen').classList);
    console.log(document.getElementById('qc_scoreScreen').classList);
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





// ----------------------------------------------------------------------------------------------------------------------------------
//                                         TEST CODE SECTION - ALL TO BE DELETED
// ----------------------------------------------------------------------------------------------------------------------------------

//  Test script for find correct button. TO BE DELETED
document.getElementById('scriptTestBtn2').addEventListener('click', function(){
    finalScore();
});

document.getElementById('scriptTestBtnA').addEventListener('click', function(){
    startScreen();
});

document.getElementById('scriptTestBtnB').addEventListener('click', function(){
    questionScreen();
});

document.getElementById('scriptTestBtnC').addEventListener('click', function(){
    scoreScreen();
});

document.getElementById('scriptTestColor').addEventListener('click', function(){
    colorMode();
});

document.getElementById('scriptTestHC').addEventListener('click', function(){
    highContrastMode();
});

//   --------------------------------- Tested Code for Category Mapping to an Option List --------------------------------

// Categories list from https://opentdb.com/api_category.php
/*
let opentdbCategoriesObject = {
    "trivia_categories":[
        {"id":9,"name":"General Knowledge"},
        {"id":10,"name":"Entertainment: Books"},
        {"id":11,"name":"Entertainment: Film"},
        {"id":12,"name":"Entertainment: Music"},
        {"id":13,"name":"Entertainment: Musicals & Theatres"},
        {"id":14,"name":"Entertainment: Television"},
        {"id":15,"name":"Entertainment: Video Games"},
        {"id":16,"name":"Entertainment: Board Games"},
        {"id":17,"name":"Science & Nature"},
        {"id":18,"name":"Science: Computers"},
        {"id":19,"name":"Science: Mathematics"},
        {"id":20,"name":"Mythology"},
        {"id":21,"name":"Sports"},
        {"id":22,"name":"Geography"},
        {"id":23,"name":"History"},
        {"id":24,"name":"Politics"},
        {"id":25,"name":"Art"},
        {"id":26,"name":"Celebrities"},
        {"id":27,"name":"Animals"},
        {"id":28,"name":"Vehicles"},
        {"id":29,"name":"Entertainment: Comics"},
        {"id":30,"name":"Science: Gadgets"},
        {"id":31,"name":"Entertainment: Japanese Anime & Manga"},
        {"id":32,"name":"Entertainment: Cartoon & Animations"}]
    };
let opentdbCategoriesArray = opentdbCategoriesObject.trivia_categories;

var categoryArray = opentdbCategoriesArray.map( function(category) {
    var item = {
        "id": category.id,
        "name": category.name
        }
    return item;
});

var htmlCategoryList = categoryArray.map(function (item) {
  return '<option value="' + item.id + '"> ' +
    item.name + '</option>';  
}).join('');
htmlCategoryList = '<option value="All" selected>All Categories</option>' + htmlCategoryList;
document.getElementById('qc_category').innerHTML = htmlCategoryList;
*/
//   --------------------------------- End of Tested Code for Category Mapping to an Option List --------------------------------

/*



function getData(amount, category){fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}`)
.then(res => res.json())
.then(data => whatever(data.results))
          }
function whatever(data) {
  const test = data.map(item => {
    return {
      question: item.question,
      correct_answer: item.correct_answer,
      answers: [...item.incorrect_answers, item.correct_answer]
    }
  })
  console.log(test)
}

getData(10, 10);

// Function to write new question and four answers to the HTML.
// Function contains five arguments for the text values of the question and four possible answers.
function printQuestion(questionText, answerAText, answerBText, answerCText, answerDText) {
    console.log('Start printAnswers()'); //To_be_deleted.
    question = document.getElementById('qc_txtQuestion');
    question.textContent = questionText;
    answerA = document.getElementById('qc_txtAnswerA');
    answerA.textContent = answerAText;
    answerB = document.getElementById('qc_txtAnswerB');
    answerB.textContent = answerBText;
    answerC = document.getElementById('qc_txtAnswerC');
    answerC.textContent = answerCText;
    answerD = document.getElementById('qc_txtAnswerD');
    answerD.textContent = answerDText;
}
//  Test script for printQuestion.
//document.getElementById('qc_btnAnswerA').addEventListener('click', function(){
//    printQuestion('test text for question', 'Hello answer a', 'Hello answer b', 'Hello answer c', 'Hello answer d');
//});

function nextQuestion(){
    if(currentQuestionNumber <= MAX_QUESTION){
        //let currentQuestionObject = questionSet[currentQuestionNumber-1];
        //console.log("questionSet is:");
        //console.log(questionSet);
        //console.log("currentQuestionObject is:");
        //console.log(currentQuestionObject);
        //console.log("questionSet.shift() is:");
        //console.log(questionSet);
        //let answerArray = [...currentQuestionObject.a_incorrect, currentQuestionObject.a_correct];
        //console.log(answerArray);
        //answerArray.sort(() => Math.random() - 0.5);    //courtesy of Eddie Kumar (https://stackoverflow.com/questions/53591691/sorting-an-array-in-random-order)
        //console.log(answerArray);

        //printQuestion(questionSet[currentQuestionNumber].q, questionSet[currentQuestionNumber].a_correct, questionSet[currentQuestionNumber].a_incorrect[0], questionSet[currentQuestionNumber].a_incorrect[1], questionSet[currentQuestionNumber].a_incorrect[2]);
        //currentQuestionNumber++;

        currentQuestion = questionSet[currentQuestionNumber-1].q;
        currentAnswerArray = [...questionSet[currentQuestionNumber-1].a_incorrect, questionSet[currentQuestionNumber-1].a_correct];
        currentAnswerArray.sort(() => Math.random() - 0.5);    //courtesy of Eddie Kumar (https://stackoverflow.com/questions/53591691/sorting-an-array-in-random-order)
        currentCorrectAnswer = questionSet[currentQuestionNumber-1].a_correct;
        printQuestion(currentQuestion, currentAnswerArray[0], currentAnswerArray[1], currentAnswerArray[2], currentAnswerArray[3]);
        currentQuestionNumber++;
    } else {
        console.log("No more questions");
    }
}

// -------------  LET'S TRY AND CAPTURE WHICH BUTTON IS CLICKED ---------------------------
// --- courtesy of timmy_i_chen   https://replit.com/@timmy_i_chen/EnchantingSilverTerabyte
function whichButton(button) {
  console.log("Button " + button + " was clicked.");
}

const buttons = ['qc_btnA', 'qc_btnB', 'qc_btnC', 'qc_btnD'];

buttons.forEach(button => document
  .getElementById(button)
  .addEventListener('click', () => whichButton(button))
);


// -------------  END OF LET'S TRY AND CAPTURE WHICH BUTTON IS CLICKED ---------------------------
// -----------------------------------------------------------------------------------------------


*/
console.log('Script Ended'); //To_be_deleted.
