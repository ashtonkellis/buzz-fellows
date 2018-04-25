'use strict';
console.log('JS is linked');

var ctx = document.getElementById('ashtonchart').getContext('2d');
var ashtonChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{
      // label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
  }
});

var ctx = document.getElementById('benchart').getContext('2d');
var benChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{
      // label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
  }
});

var ctx = document.getElementById('jennychart').getContext('2d');
var jennyChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{
      // label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
  }
});


var ctx = document.getElementById('mariochart').getContext('2d');
var marioChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{
      // label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
  }
});