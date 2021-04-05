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

console.log('Script Ended'); //To_be_deleted.
//function printQuestion(questionText, answerAText, answerBText, answerCText, answerDText) {