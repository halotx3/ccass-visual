const baseUrl =
    'http://serene-beach-38826.herokuapp.com/api/v1/celebrities/year/'

// const colorScale = d3.interpolateInferno;
const colorScale = d3.interpolateRainbow;

const colorRangeInfo = {
  colorStart: 0,
  colorEnd: 1,
  useEndAsStart: false,
};

var myChart

function currentData(year = '2005') {
  return new Promise(function(resolve, reject) {
    d3.json(baseUrl + year).then(result => {
      var chartData = {labels: [], data: []};
      comparePay = compareValues('pay', 'desc');
      var sortedResult = result.sort(comparePay);
      var labels = sortedResult.map(r => r.name);
      var data = sortedResult.map(r => r.pay)
      chartData['labels'].push(labels);
      chartData['data'].push(data);
      if (chartData) {
        resolve(chartData)
      } else {
        reject(Error('something wrong'))
      }
    })
  })
}


function createChart(chartId, chartData, colorScale, colorRangeInfo) {
  const ctx = document.getElementById(chartId);
  const dataLength = chartData.data[0].length;
  const COLORS = interpolateColors(dataLength, colorScale, colorRangeInfo);

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels[0],
      datasets: [{
        label: 'Income $MM',
        data: chartData.data[0],
        backgroundColor: COLORS,
        borderColor: COLORS,
        borderWidth: 1
      }]
    },
    options: {
      scales: {yAxes: [{ticks: {beginAtZero: true}}]},
      tooltips: {displayColors: true}
    }
  });
  return myChart;
}

if (window.myChart != undefined) {
  window.myChart.destroy();
} else {
  // set initial year = '2005'
  currentData('2005').then(function(chartData) {
    myChart = createChart('myChart', chartData, colorScale, colorRangeInfo)
  });
}


$(document).on('change', 'select.year-selector', (function() {
                 $('select').formSelect();
                 var elem = document.querySelector('select.year-selector');
                 //  var options = document.querySelectorAll('option');
                 var instance = M.FormSelect.getInstance(elem);
                 console.log('instance', instance)
                 var value = instance.getSelectedValues()
                 console.log(value);
                 //  instance.destroy();
                 currentData(value).then(function(chartData) {
                   if (window.myChart != undefined) {
                     window.myChart.destroy();
                   }
                   myChart = createChart(
                       'myChart', chartData, colorScale, colorRangeInfo);
                   myChart.update()
                 });
               }))
