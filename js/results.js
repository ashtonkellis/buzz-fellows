var maxPoints = 16;

var currentUser = User.allUser[(User.allUser.length - 1)];

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

function calculateChartData() {
  currentUser.allChartData = addChartData();
  var chartData = currentUser.allChartData.data;
  // all courses chart - labels
  chartData.labels.push('C#');
  chartData.labels.push('Java');
  chartData.labels.push('Python');
  chartData.labels.push('JavaScript');
  // all courses chart - data
  console.log(currentUser);
  chartData.datasets[0].data.push(currentUser.totalPointsC);
  chartData.datasets[0].data.push(currentUser.totalPointsJ);
  chartData.datasets[0].data.push(currentUser.totalPointsP);
  chartData.datasets[0].data.push(currentUser.totalPointsJ);
  // all courses chart - background colors
  chartData.datasets[0].backgroundColor.push('rgba(102, 51, 153, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(209, 31, 31, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(58, 123, 193, 1)');
  chartData.datasets[0].backgroundColor.push('rgba(244, 235, 66, 1)');
  // all courses chart - border colors
  chartData.datasets[0].backgroundColor.push('rgba(102, 51, 153, 1.0)');
  chartData.datasets[0].backgroundColor.push('rgba(209, 31, 31, 1.0)');
  chartData.datasets[0].backgroundColor.push('rgba(58, 123, 193, 1.0)');
  chartData.datasets[0].backgroundColor.push('rgba(244, 235, 66, 1.0)');

  var ctx = document.getElementById('user-results-chart').getContext('2d');
  var myChart = new Chart(ctx, currentUser.allChartData);
}

var test = calculateChartData();