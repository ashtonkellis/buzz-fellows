'use strict';

// [JavaScript, C#, Python, Java]

allUser = [];

function User(username) {
  this.username = username;
  this.question1 = null;
  allUser.push(this);
}

