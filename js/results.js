var maxPoints = 16;

var user = User.allUser[(User.allUser.length - 1)];

function addChartData () {
  var chartData = {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        label: '# of Votes',
        data: [],
        backgroundColor: [],
        borderColor: [],
      }]
    },
    options: {
      rotation: -0.5 * Math.PI,
    }
  };
  return chartData;
}

function calculateChartData(user) {
  // declare
  var chartId = user.username + '-results-chart';
  console.log(chartId);
  var ctx = document.getElementById(chartId).getContext('2d');

  user.allChartData = addChartData();
  var chartData = user.allChartData.data;
  // all courses chart - labels
  chartData.labels.push('C#');
  chartData.labels.push('Java');
  chartData.labels.push('Python');
  chartData.labels.push('JavaScript');
  // all courses chart - data
  console.log(user);
  chartData.datasets[0].data.push(user.totalPointsC);
  chartData.datasets[0].data.push(user.totalPointsJ);
  chartData.datasets[0].data.push(user.totalPointsP);
  chartData.datasets[0].data.push(user.totalPointsJ);
  // all courses chart - background colors
  chartData.datasets[0].backgroundColor.push('rgba(102, 51, 153, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(209, 31, 31, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(58, 123, 193, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(244, 235, 66, 1)');
  // all courses chart - border colors
  chartData.datasets[0].backgroundColor.push('rgba(102, 51, 153, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(209, 31, 31, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(58, 123, 193, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(244, 235, 66, 1)');

  // render chart
  new Chart(ctx, user.allChartData);
}

function renderAllResults () {
  var allResultsSection = document.getElementById('all-results-section');
  for (var user of User.allUser) {
    // create user-card div
    var divEL = document.createElement('div');
    divEL.class = 'user-card';
    // create h3 element
    var h3EL = document.createElement('h3');
    h3EL.textContent = user.username;
    // create canvas element
    var canvasEL = document.createElement('canvas');
    var canvasId = user.username + '-results-chart';
    canvasEL.id = canvasId;
    // append elements to div
    divEL.appendChild(h3EL);
    divEL.appendChild(canvasEL);
    // append div to all-results section
    allResultsSection.appendChild(divEL);
    //render chart
    calculateChartData(user);
  }
}

renderAllResults();
calculateChartData(User.allUser[0]);