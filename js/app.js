/* global User */
'use strict';
// C#, Java, Python, JavaScript

Question.allQuestions = [];

Question.numberOfQuestion = 8; // Set to 2 atm because only two questions made
Question.optionOrderArr = ['optionC', 'optionJ', 'optionP', 'optionS'];

User.allUser = JSON.parse(localStorage.getItem('pastUsers')) || [];

if (User.allUser.length === 0) {
  new User('Ashton', 2, 3, 8, 16);
  new User('Ben', 16, 2, 3, 8);
  new User('Jenny', 8, 16, 2, 3);
  new User('Mario', 3, 8, 16, 2);
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
  'What do you want to make?',
  new Option ('', 'Games', 2, 0, 1, 0),
  new Option ('', 'Mobile Apps', 0, 2, 0, 1),
  new Option ('', 'Robots', 1, 0, 2, 0),
  new Option ('', 'Websites', 0, 1, 0, 2)
);

new Question (
  'question2',
  'Where would you like to work?',
  new Option ('img/company-logos/microsoftlogo.png', '', 2, 0, 0, 1),
  new Option ('img/company-logos/amazonlogo.png', '', 0, 2, 1, 0),
  new Option ('img/company-logos/boeinglogo.png', '', 0, 1, 2, 0),
  new Option ('img/company-logos/adobelogo.png', '', 1, 0, 0, 2)
);

new Question (
  'question3',
  'How important is money to you?',
  new Option ('', 'Very', 0, 1, 2, 0),
  new Option ('', 'Kind of', 0, 2, 1, 0),
  new Option ('', 'Not very', 1, 0, 0, 2),
  new Option ('', 'Not at all', 2, 0, 0, 1)
);

new Question (
  'question4',
  'How do you feel about change?',
  new Option ('', 'Love it', 0, 1, 2, 0),
  new Option ('', 'Like it', 0, 2, 1, 0),
  new Option ('', 'Dislike it', 1, 0, 0, 2),
  new Option ('', 'Hate it', 2, 0, 0, 1)
);

new Question (
  'question5',
  'How would your friends describe you?',
  new Option ('', 'Determined', 0, 1, 2, 0),
  new Option ('', 'Powerful', 0, 2, 1, 0),
  new Option ('', 'Productive', 1, 0, 0, 2),
  new Option ('', 'Problem Solver', 2, 0, 0, 1)
);

new Question (
  'question6',
  'Pick your favorite goat',
  new Option ('img/goats/sweater-goat.jpg', '', 2, 2, 2, 2),
  new Option ('img/goats/tongue.jpg', '', 2, 2, 2, 2),
  new Option ('img/goats/flower-goat.jpg', '', 2, 2, 2, 2),
  new Option ('img/goats/jumping.jpg', '', 2, 2, 2, 2)
);

new Question (
  'question7',
  'What do you drink in the morning?',
  new Option ('img/drinks/tea.jpg', '', 2, 1, 0, 0),
  new Option ('img/drinks/coffee.jpg', '', 0, 2, 0, 1),
  new Option ('img/drinks/smoothie.jpg', '', 1, 0, 2, 0),
  new Option ('img/drinks/orange.jpg', '', 0, 0, 1, 2)
);

new Question (
  'question8',
  'What is your favorite social media site?',
  new Option ('img/website-logos/twitterlogo.png', '', 2, 0, 1, 0),
  new Option ('img/website-logos/instagramlogo.png', '', 0, 2, 0, 1),
  new Option ('img/website-logos/youtubelogo.png', '', 1, 0, 2, 0),
  new Option ('img/website-logos/facebooklogo.png', '', 0, 1, 0, 2)
);
