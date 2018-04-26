/* global User Chart*/
User.maxPoints = 16;

Chart.defaults.global.legend.position = 'bottom';
Chart.defaults.global.legend.labels.boxWidth = 8;
Chart.defaults.global.legend.labels.fontSize = 8;

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
      rotation: -1.0 * Math.PI,
      responsive: true,
    }
  };
  return chartData;
}

function calculateAllChartData(user) {
  for (user of User.allUser) {
    // CALCULATE DATA FOR THE COMBINED CHART
    user.allChartData = addChartData();
    var chartData = user.allChartData.data;
    chartData.labels.push(
      'C#',
      'Java',
      'Python',
      'JavaScript');
    chartData.datasets[0].data.push(
      user.totalPointsC,
      user.totalPointsJ,
      user.totalPointsP,
      user.totalPointsS);
    chartData.datasets[0].backgroundColor.push(
      'rgba(102, 51, 153, 1)',
      'rgba(209, 31, 31, 1)',
      'rgba(58, 123, 193, 1)',
      'rgba(244, 235, 66, 1)');
    chartData.datasets[0].borderColor.push(
      'rgba(102, 51, 153, 1)',
      'rgba(209, 31, 31, 1)',
      'rgba(58, 123, 193, 1)',
      'rgba(244, 235, 66, 1)');
    //CALCULATE DATA FOR INDIVIDUAL CHARTS
    // make empty data sets for each 401 course
    user.CChartData = addChartData();
    user.JChartData = addChartData();
    user.PChartData = addChartData();
    user.SChartData = addChartData();
    // push in labels
    user.CChartData.data.labels.push('C#');
    user.JChartData.data.labels.push('Java');
    user.PChartData.data.labels.push('Python');
    user.SChartData.data.labels.push('JavaScript');
    // push in data
    user.CChartData.data.datasets[0].data.push(
      user.totalPointsC, (User.maxPoints - user.totalPointsC)
    );
    user.JChartData.data.datasets[0].data.push(
      user.totalPointsJ, (User.maxPoints - user.totalPointsJ)
    );
    user.PChartData.data.datasets[0].data.push(
      user.totalPointsP, (User.maxPoints - user.totalPointsP)
    );
    user.SChartData.data.datasets[0].data.push(
      user.totalPointsS, (User.maxPoints - user.totalPointsS)
    );
    // push in background colors
    user.CChartData.data.datasets[0].backgroundColor.push('rgba(102, 51, 153, 1)', 'rgba(0, 0, 0, 0)');
    user.JChartData.data.datasets[0].backgroundColor.push('rgba(209, 31, 31, 1)', 'rgba(0, 0, 0, 0)');
    user.PChartData.data.datasets[0].backgroundColor.push('rgba(58, 123, 193, 1)', 'rgba(0, 0, 0, 0)');
    user.SChartData.data.datasets[0].backgroundColor.push('rgba(244, 235, 66, 1)', 'rgba(0, 0, 0, 0)');
    // push in border colors
    user.CChartData.data.datasets[0].borderColor.push('rgba(102, 51, 153, 1)', 'rgba(0, 0, 0, 0)');
    user.JChartData.data.datasets[0].borderColor.push('rgba(209, 31, 31, 1)', 'rgba(0, 0, 0, 0)');
    user.PChartData.data.datasets[0].borderColor.push('rgba(58, 123, 193, 1)', 'rgba(0, 0, 0, 0)');
    user.SChartData.data.datasets[0].borderColor.push('rgba(244, 235, 66, 1)', 'rgba(0, 0, 0, 0)');
  }
}

function renderHeroCharts (user) {
  // change username in header above charts
  var spanEL = document.getElementById('hero-username');
  spanEL.textContent = user.username;

  // render C sharp chart
  var chartId, ctx;
  chartId = 'hero-results-c';
  ctx = document.getElementById(chartId).getContext('2d');
  new Chart(ctx, user.CChartData); //eslint-disable-line
  // render Java sharp chart
  chartId = 'hero-results-j';
  ctx = document.getElementById(chartId).getContext('2d');
  new Chart(ctx, user.JChartData); //eslint-disable-line
  // render Python sharp chart
  chartId = 'hero-results-p';
  ctx = document.getElementById(chartId).getContext('2d');
  new Chart(ctx, user.PChartData); //eslint-disable-line
  // render JavaScript chart
  chartId = 'hero-results-s';
  ctx = document.getElementById(chartId).getContext('2d');
  new Chart(ctx, user.SChartData); //eslint-disable-line  
}

function renderAllUserCards () {
  var allResultsSection = document.getElementById('all-results-section');
  for (var user of User.allUser.slice().reverse()) {
    // create user-card div
    var divEL = document.createElement('div');
    divEL.className = 'user-card';
    // create canvas/chart container div
    var chartContainerDivEL = document.createElement('div');
    chartContainerDivEL.className = 'chart-container';
    // create h3 element
    var h3EL = document.createElement('h3');
    h3EL.textContent = user.username;
    // create canvas element
    var canvasEL = document.createElement('canvas');
    var canvasId = user.username + '-results-chart';
    if (document.getElementById(canvasId)) {
      user.username += Math.random();
      canvasId = user.username + '-results-chart';
    }
    canvasEL.id = canvasId;
    // append elements to div
    divEL.appendChild(h3EL);
    chartContainerDivEL.appendChild(canvasEL);
    divEL.appendChild(chartContainerDivEL);
    // append div to all-results section
    allResultsSection.appendChild(divEL);
  }
}

function renderResultCharts(user) {
  var chartId = user.username + '-results-chart';
  var ctx = document.getElementById(chartId).getContext('2d');
  new Chart(ctx, user.allChartData); //eslint-disable-line
}

function renderAllResultCharts() {
  for (var user of User.allUser) {
    renderResultCharts(user);
  }
}

calculateAllChartData();
// render all user charts
renderAllUserCards();
renderAllResultCharts();
// render hero charts
renderHeroCharts(User.allUser[User.allUser.length - 1]);
