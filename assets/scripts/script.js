console.log('Script Started'); //To_be_deleted.

questions = [];

fetch(
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });
            console.log(formattedQuestion);
            return formattedQuestion;
        });
        //startGame();
    })
    .catch((err) => {
        console.error(err);
    });

console.log(questions);

/*    
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};
*/







/*

// Function to fetch a number of questions of particular category and difficulty from the open tdb (trivia database)
function fetchQuestions(numQuestions, category, difficulty) {
    fetch(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}`)
    .then(result => result.json())
    .then(jsonQuestions => questionsToObject(jsonQuestions.results))
}

// Function to generate an object from returned JSON of opentdb.
function questionsToObject(data) {
    const questionSet = data.map(item => {
        let answerArray = [...item.incorrect_answers, item.correct_answer]
        answerArray.sort(() => Math.random() - 0.5);   // code courtesy of javascript.info/task/shuffle
        return {
            question: item.question,
            correctAnswer: item.correct_answer,
            answers: answerArray
        }
    })
    console.log(questionSet);   // To_be_deleted.
}


fetchQuestions(5,10,"hard");
console.log(playerQuestionSet);


//console.log(player1Questions[0].correctAnswer);
//console.log(player1Questions[0].answers[0]);
//console.log(player1Questions[0].answers[1]);
//console.log(player1Questions[0].answers[2]);
//console.log(player1Questions[0].answers[3]);



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
*/
console.log('Script Ended'); //To_be_deleted.
//function printQuestion(questionText, answerAText, answerBText, answerCText, answerDText) {