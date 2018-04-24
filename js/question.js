'use strict';

var optionOrderArr = ['optionC', 'optionJ', 'optionP', 'optionJ'];

// var h2El = document.getElementById('question1');
// h2El.textContent = Question.allQuestions[0].text;

// var labelEl = document.getElementsByTagName('label')[1];
// labelEl.textContent = Question.allQuestions[0].optionC.text;

// labelEl = document.getElementsByTagName('label')[2];
// labelEl.textContent = Question.allQuestions[0].optionJ.text;
// labelEl = document.getElementsByTagName('label')[3];
// labelEl.textContent = Question.allQuestions[0].optionP.text;
// labelEl = document.getElementsByTagName('label')[4];
// labelEl.textContent = Question.allQuestions[0].optionS.text;

function handleSubmit(event) {
  event.preventDefault();

  // variables to pass to new User constructor
  var userPointsC = 0;
  var userPointsJ = 0;
  var userPointsP = 0;
  var userPointsS = 0;

  var username = document.getElementById('username').value;

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

  event.target.reset();
  
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  localStorage.setItem('pastUsers', JSON.stringify(User.allUser));

  window.location.href = 'results.html';
}

var formEl = document.getElementById('mainQuiz');
formEl.addEventListener('submit', handleSubmit);












































// find the h2 for the question block and give it the question string
// find the label element




var labelElArr = document.querySelectorAll('div#question1 div label');
console.log(labelElArr);

for(var i = 0; i < labelElArr.length; i++) {
  var pEl = document.createElement('p');
  pEl.textContent = Question.allQuestions[0][optionOrderArr[i]].text;
  var label = labelElArr[i];
  label.appendChild(pEl);
}


labelElArr = document.querySelectorAll('div#question2 div label');
console.log(labelElArr);

for(var i = 0; i < labelElArr.length; i++) {
  var imgEl = document.createElement('img');
  imgEl.src = Question.allQuestions[1][optionOrderArr[i]].url;
  imgEl.setAttribute('width', 200); // Delete this for other image Bandaid fix for sizing issue
  var label = labelElArr[i];
  label.appendChild(imgEl);
}

// give that element the img or text for C# option
// find the other label element and give that Java optiom
// find the other label element and give that python option
// find the other label element and give that the JS option
