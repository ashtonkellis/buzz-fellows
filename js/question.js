/* global Question User*/
'use strict';

//gives me an array of all the questionEl
var questionBlockElArr = document.getElementsByClassName('question');

function renderQuestions() {
  for(var i = 0; i < Question.numberOfQuestion; i++) {
    //prints out the question for each question
    var h2El = questionBlockElArr[i].getElementsByTagName('h2')[0];
    h2El.textContent = Question.allQuestions[i].text;
    var labelElArr = questionBlockElArr[i].getElementsByTagName('label');
    //renders the 4 options for the question
    for(var j = 0; j < labelElArr.length; j++) {
      var label = labelElArr[j];
      if(Question.allQuestions[i][Question.optionOrderArr[j]].text) {
        var pEl = document.createElement('p');
        pEl.textContent = Question.allQuestions[i][Question.optionOrderArr[j]].text;
        label.appendChild(pEl);
      } else {
        var imgEl = document.createElement('img');
        imgEl.src = Question.allQuestions[i][Question.optionOrderArr[j]].url;
        label.appendChild(imgEl);
      }
    }
  }
}
renderQuestions();

function handleSubmit(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  // variables to pass to new User constructor
  var userPointsC = 0;
  var userPointsJ = 0;
  var userPointsP = 0;
  var userPointsS = 0;

  // loop through each question and increment user points
  for (var question of Question.allQuestions) {
    var questionId = question.id;
    var userChoice = event.target[questionId].value;

    // increment all of the points
    userPointsC += question[userChoice].pointsC;
    userPointsJ += question[userChoice].pointsJ;
    userPointsP += question[userChoice].pointsP;
    userPointsS += question[userChoice].pointsS;
  }

  // make new user
  var currentUser = new User(username, userPointsC, userPointsJ, userPointsP, userPointsS);

  console.log(User.allUser);

  // resets the form on submit
  event.target.reset();

  // store users info into local storage
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  localStorage.setItem('pastUsers', JSON.stringify(User.allUser));

  window.location.href = 'results.html';
}

var formEl = document.getElementById('mainQuiz');
formEl.addEventListener('submit', handleSubmit);














































// function renderQuestions() {
//   //gives me an array of all the questionEl
//   var questionBlockElArr = document.getElementsByClassName('question');
//   for(var i = 0; i < Question.numberOfQuestion; i++) {
//     //prints out the question for each question
//     var h2El = questionBlockElArr[i].getElementsByTagName('h2')[0];
//     h2El.textContent = Question.allQuestions[i].text;
//     var labelElArr = questionBlockElArr[i].getElementsByTagName('label');
//     //renders the 4 options for the question
//     for(var j = 0; j < labelElArr.length; j++) {
//       var pEl = document.createElement('p');
//       pEl.textContent = Question.allQuestions[i][Question.optionOrderArr[j]].text;
//       var imgEl = document.createElement('img');
//       imgEl.src = Question.allQuestions[i][Question.optionOrderArr[j]].url;
//       var label = labelElArr[j];
//       label.appendChild(pEl);
//       label.appendChild(imgEl);
//     }
//   }
// }
// renderQuestions();




































































// var numValid = 0;


var allInputEl = document.getElementsByTagName('input');
var usernameInputEl = allInputEl[0];


function calculateProgress(x) {
  var percentIncrease = (1 / Question.numberOfQuestion) * 100;
  for(var i = 0; i < Question.numberOfQuestion + 1; i++) {
    if(x === i){
      document.getElementById('progress').value = percentIncrease * (i);
    }
  }
  document.getElementById('progress-message').textContent = x + '/' + Question.numberOfQuestion;
}

function userInputName(e) {
  if(usernameInputEl.validity.valid) {
    document.getElementById('progress-message').textContent = 'Hello, ' + usernameInputEl.value.toUpperCase();
  }
}

// How many questions are valid so far?
function calcNumValid() {
  var numValid = 0;
  for(var i of questionBlockElArr) {
    var radioElArr = i.getElementsByTagName('input');
    for (var j of radioElArr) {
      if(j.type === 'radio' && j.checked) {
        numValid++;
      }
    }
  }
  return numValid;
}


function whoIsThatMisterOnTheRadio(e) {
  var numValid = calcNumValid();
  console.log(numValid);
  calculateProgress(numValid);
}

usernameInputEl.addEventListener('blur', userInputName);
formEl.addEventListener('change', whoIsThatMisterOnTheRadio);
