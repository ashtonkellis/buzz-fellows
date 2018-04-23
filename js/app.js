'use strict';

// [JavaScript, C#, Python, Java]

User.allUser = [];
Question.allQuestions = [];

function User(username) { //eslint-disable-line
  this.username = username;
  this.totalPointsC = 0;
  this.totalPointsJ = 0;
  this.totalPointsP = 0;
  this.totalPointsS = 0;
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

// console.log(allQuestions[0]);
