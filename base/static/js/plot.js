// set the dimensions and margins of the graph
// function start() {
//   $(document).ready(function () {
//     $('select').formSelect();
//   });
// };
// start();

// set the dimensions and margins of the graph
Plotly.d3.csv("data/combined.csv", function (err, rows) {
// Plotly.d3.csv("combined.csv", function (err, rows) {
    function unpack(rows, key) {

        return rows.map(function (row) { return row[key]; });
    }

    var allOccupation = unpack(rows, 'Occupation'),
        allCategory = unpack(rows, 'New Category'),
        allYear = unpack(rows, 'Year'),
        annual_byOcc = unpack(rows, 'earnings_avg_1'),
        annual_byCat = unpack(rows, 'earnings_avg_2'),
        listofOccupation = [];

    for (var i = 0; i < allOccupation.length; i++) {
        if (listofOccupation.indexOf(allOccupation[i]) === -1) {
            listofOccupation.push(allOccupation[i]);
        }
    }

    function getOccupationData(chosenOccupation) {
        console.log('**************Function Start**************')
        currentIncome1 = [];
        currentIncome2 = [];
        currentCategory = [];
        currentYear = [];
        for (var i = 0; i < allOccupation.length; i++) {
            if (allOccupation[i] === chosenOccupation) {
                currentIncome1.push(annual_byOcc[i]);
                currentIncome2.push(annual_byCat[i]);
                currentCategory.push(allCategory[i]);
                currentYear.push(allYear[i])
            }
        }
        
    };


    // Default Data
    setBubblePlot('Athletes');

    function setBubblePlot(chosenOccupation) {
    getOccupationData(chosenOccupation);  

    var trace_line = {
      name: 'Aggregate Average Income',
      x: currentYear,
      y: currentIncome1,
      mode: 'lines',
      line: {width: 5},
      marker: {
        size: 200, 
        opacity: 0.8
      }
    };

    var trace_bubble = {
      x: currentYear,
      y: currentIncome2,
      name: '',
      type: 'scatter',
      mode: 'markers',
      marker: {
        size: currentIncome2,
        sizemode: 'area',
        sizeref: .2,
        opacity: 0.4},
      transforms: [
        {type: 'groupby', groups: currentCategory}]
    };


    var data = [trace_line, trace_bubble];

    var layout = {
      //title: chosenOccupation + ' ($Millions)',
      xaxis: {zeroline: true, showline: true},
      yaxis: {title: 'Income $MM'}
    };
    var config = {responsive: true}

    Plotly.newPlot('plotdiv', data, layout, config);

    };

    var selector = document.querySelector('[data-num="0"'),
    OccupationSelector = selector.querySelector('#Occupationdata');

    function assignOptions(textArray, selector) {
    for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
    }
    }

    assignOptions(listofOccupation, OccupationSelector);

    function updateOccupation(){
    setBubblePlot(OccupationSelector.value);
    }

    OccupationSelector.addEventListener('change', updateOccupation, false);
});
