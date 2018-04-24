'use strict';


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














































function renderQuestions() {
  //gives me an array of all the questionEl 
  var questionBlockElArr = document.getElementsByClassName('question');
  for(var i = 0; i < Question.numberOfQuestion; i++) {
    //prints out the question for each question
    var h2El = questionBlockElArr[i].getElementsByTagName('h2')[0];
    h2El.textContent = Question.allQuestions[i].text;
    var labelElArr = questionBlockElArr[i].getElementsByTagName('label');
    //renders the 4 options for the question
    for(var j = 0; j < labelElArr.length; j++) {
      var pEl = document.createElement('p');
      pEl.textContent = Question.allQuestions[i][Question.optionOrderArr[j]].text;
      var imgEl = document.createElement('img');
      imgEl.src = Question.allQuestions[i][Question.optionOrderArr[j]].url;
      var label = labelElArr[j];
      label.appendChild(pEl);
      label.appendChild(imgEl);
    }
  }
}
renderQuestions();



