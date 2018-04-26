/* global Chart*/
'use strict';

var ctx;

ctx = document.getElementById('ashtonchart');
var ashtonChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{

      data: [2, 3, 8, 16],
      backgroundColor: [
        'rgba(102, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderColor:[
        'rgba(102, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
  }
});

ctx = document.getElementById('benchart');
var benChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{

      data: [16, 2, 3, 8],
      backgroundColor: [
        'rgba(102, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderColor:[
        'rgba(102, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
  }
});

ctx = document.getElementById('jennychart');
var jennyChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{

      data: [8, 16, 2, 3],
      backgroundColor: [
        'rgba(102, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderColor:[
        'rgba(102, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
  }
});


ctx = document.getElementById('mariochart');
var marioChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{

      data: [3, 8, 16, 2],
      backgroundColor: [
        'rgba(102, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderColor:[
        'rgba(102, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
  }
});