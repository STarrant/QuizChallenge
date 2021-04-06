// Categories list from https://opentdb.com/api_category.php

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

console.log(categoryArray[3]);
console.log(categoryArray[3].id)
console.log(categoryArray[3].name)

var htmlCategoryList = categoryArray.map(function (item) {
  return '<option>' + item.id + ', ' +
    item.name + '</option>';  
}).join('');

console.log(htmlCategoryList);

document.getElementById('qc_numQuestions').innerHTML = htmlCategoryList;



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
*/
console.log('Script Ended'); //To_be_deleted.
