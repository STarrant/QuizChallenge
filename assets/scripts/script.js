
// --- FETCH QUESTIONS AND PUT IN AN ARRAY ---
var questionSet = [];

document.getElementById('qc_startGame').addEventListener('click', function(){
    getQuestions();
});

function getQuestions(){fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')  //Fetch XXXXXX questions from OpenTDB.com.
    .then(result => result.json())                                      //Promise: Isolate JSON data from the response.
    .then(data => questionJSONtoArray(data))                          //Promise: call the categoryJSONtoHTMLOptions function.
}

function questionJSONtoArray(opentdbQuestionObject) {           // Function to convert the returned JSON object to a HTML option list. Argument of the JSON category object taken.
    let opentdbQuestionArray = opentdbQuestionObject.results;   //New array opentdbCategoriesArray is assigned to the trivia_categories array value.
    var questionArray = opentdbQuestionArray.map( function(questions) {   //Another new array categoryArray is mapped to the values of the opentdbCategories array.
        var item = {
            "q": questions.question,
            "a_correct": questions.correct_answer,
            "a_incorrect": questions.incorrect_answers
            }
        return item;
    });

    var htmlQuestionList = questionArray.map(function (item) {              //New string htmlCategoryList is created by mapping data from the categoryArray by looping through each element while adding the HTML tags.
        return '<li>' + item.q + '  -  ' + item.a_correct + '</li>';  
    }).join('');
    document.getElementById('qc_testQuestionList').innerHTML = htmlQuestionList;   //This string is inserted to the HTML categories list in index.html.
}
// --- END FETCH QUESTIONS AND PUT IN AN ARRAY ---




// --- FETCH CATEGORIES AND PUT IN HTML OPTIONS DROPDOWN ---

document.getElementById('scriptTestBtn').addEventListener('click', function(){
    getCategories();
});

function getCategories(){fetch('https://opentdb.com/api_category.php')  //Fetch the available categories from OpenTDB.com.
    .then(result => result.json())                                      //Promise: Isolate JSON data from the response.
.then(data => categoryJSONToHTMLOptions(data))                          //Promise: call the categoryJSONtoHTMLOptions function.
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
// --- END FETCH CATEGORIES AND PUT IN HTML OPTIONS DROPDOWN ---





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
*/
console.log('Script Ended'); //To_be_deleted.
