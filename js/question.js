'use strict';


var h2El = document.getElementById('question1');
h2El.textContent = Question.allQuestions[0].text;


var labelEl = document.getElementsByTagName('label')[1];
labelEl.textContent = Question.allQuestions[0].optionC.text;

var labelEl = document.getElementsByTagName('label')[2];
labelEl.textContent = Question.allQuestions[0].optionJ.text;
var labelEl = document.getElementsByTagName('label')[3];
labelEl.textContent = Question.allQuestions[0].optionP.text;
var labelEl = document.getElementsByTagName('label')[4];
labelEl.textContent = Question.allQuestions[0].optionS.text;