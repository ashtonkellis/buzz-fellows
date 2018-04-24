'use strict';

// [JavaScript, C#, Python, Java]

Question.allQuestions = [];

Question.numberOfQuestion = 2; // Set to 2 atm because only two questions made
Question.optionOrderArr = ['optionC', 'optionJ', 'optionP', 'optionS'];

User.allUser = JSON.parse(localStorage.getItem('pastUsers')) || [];

if (User.allUser.length === 0) {
  new User('Ashton', 1, 2, 3, 4);
  new User('Ben', 2, 3, 4, 1);
  new User('Jenny', 3, 4, 1, 2);
  new User('Mario', 4, 1, 2, 3);
}

function User(username, totalPointsC, totalPointsJ, totalPointsP, totalPointsS) { //eslint-disable-line
  this.username = username;
  this.totalPointsC = totalPointsC;
  this.totalPointsJ = totalPointsJ;
  this.totalPointsP = totalPointsP;
  this.totalPointsS = totalPointsS;
  User.allUser.push(this);
}

function Option (url, text, pointsC, pointsJ, pointsP, pointsS) { //eslint-disable-line
  this.url = url;
  this.text = text;
  this.pointsC = pointsC;
  this.pointsJ = pointsJ;
  this.pointsP = pointsP;
  this.pointsS = pointsS;
}

function Question (id, text, optionC, optionJ, optionP, optionS) {
  this.id = id;
  this.text = text;
  this.optionC = optionC;
  this.optionJ = optionJ;
  this.optionP = optionP;
  this.optionS = optionS;
  Question.allQuestions.push(this);
}

new Question (
  'question1',
  'Choose your 401 class',
  new Option ('', 'C#', 2, 0, 0, 0),
  new Option ('', 'Java', 0, 2, 0, 0),
  new Option ('', 'Python', 0, 0, 2, 0),
  new Option ('', 'JavaScript', 0, 0, 0, 2)
);

new Question (
  'question2',
  'Choose your 401 class V2',
  new Option ('img/csharp-logo.png', '', 2, 0, 0, 0),
  new Option ('img/java-logo.png', '', 0, 2, 0, 0),
  new Option ('img/python-logo.png', '', 0, 0, 2, 0),
  new Option ('img/js-logo.png', '', 0, 0, 0, 2)
);

// console.log(allQuestions[0]);
