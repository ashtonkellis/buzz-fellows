'use strict';


var h2El = document.getElementById('question1');
h2El.textContent = Question.allQuestions[0].text;


var labelEl = document.getElementsByTagName('label')[1];
labelEl.textContent = Question.allQuestions[0].optionC.text;

labelEl = document.getElementsByTagName('label')[2];
labelEl.textContent = Question.allQuestions[0].optionJ.text;
labelEl = document.getElementsByTagName('label')[3];
labelEl.textContent = Question.allQuestions[0].optionP.text;
labelEl = document.getElementsByTagName('label')[4];
labelEl.textContent = Question.allQuestions[0].optionS.text;

function handleSubmit(event) {
  event.preventDefault();
  console.log('yo');
}

var formEl = document.getElementById('mainQuiz');
formEl.addEventListener('submit', handleSubmit);