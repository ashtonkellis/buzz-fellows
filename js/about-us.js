/* global Chart*/
'use strict';

Chart.defaults.global.legend.position = 'bottom';
Chart.defaults.global.legend.labels.boxWidth = 8;
Chart.defaults.global.legend.labels.fontSize = 16;
Chart.defaults.global.legend.labels.fontColor = '#FFF';

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
        'rgba(153, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
    responsive: true,
    legend: {
      display: true,
    },
    aspectRatio: 1,
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
        'rgba(153, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
    responsive: true,
    legend: {
      display: true,
    },
    aspectRatio: 1,
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
        'rgba(153, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
    responsive: true,
    legend: {
      display: true,
    },
    aspectRatio: 1,
  }
});

// mario charti
ctx = document.getElementById('mariochart');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['C#', 'Java', 'Python', 'JavaScript'],
    datasets: [{

      data: [3, 8, 16, 2],
      backgroundColor: [
        'rgba(153, 51, 153, 1)',
        'rgba(209, 31, 31, 1)',
        'rgba(58, 123, 193, 1)',
        'rgba(244, 235, 66, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    rotation: -1.25 * Math.PI,
    responsive: true,
    legend: {
      display: true,
    },
    aspectRatio: 1,
  }
});