/* global Chart*/
'use strict';

var ctx;

// ashton chart
ctx = document.getElementById('ashtonchart');
new Chart(ctx, {
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

// ben chart
ctx = document.getElementById('benchart');
new Chart(ctx, {
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

// jenny chart
ctx = document.getElementById('jennychart');
new Chart(ctx, {
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

// mario chart
ctx = document.getElementById('mariochart');
new Chart(ctx, {
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