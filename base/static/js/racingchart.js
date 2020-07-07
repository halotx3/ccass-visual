//Grabbing URLs
const athletesURL = 'http://serene-beach-38826.herokuapp.com/api/v1/athletes';
// const celebURL;


//Temp Arrays to hold the years of each decade


//Function to update tables based on decade

d3.json(athletesURL).then(function(athlData){
    // Ndata = athlData.filter(athlData.year <= 1990 && athlData.year < 2000)
    let nameList = [];
    // console.log(athlData.length)
    let avgData = [];
    //Loop to add individual names to name list
    for(let i = 0; i < athlData.length; i++){
        if(nameList.includes(athlData[i].name) === false){
            nameList.push(athlData[i].name);
            avgData.push({"name": athlData[i].name, "avg": athlData[i].earnings})
        }
        else if(nameList.includes(athlData[i].name) === true){
            for(let j = 0; j < avgData.length; j++){
                if(athlData[i].name == avgData[j].name){
                    let newAvg = (avgData[j].avg + athlData[i].earnings)/2
                    avgData[j]["avg"] = newAvg
                    console.log("average updated")
                }
            }
        }
    };
    //Sorting by highest average
    sortAvg = compareValues('avg', 'desc');
    let sortedAvg = avgData.sort(sortAvg)

    //Loop to save the Top 10
    topNames = [];
    topAvgs = [];
    for(let i = 0; i < 10; i++){
        topNames.push(sortedAvg[i].name)
        topAvgs.push(Math.round(sortedAvg[i].avg, 1))
    }
    //posting chart
    var options = {
        series: [{
        data: topAvgs
      }],
        chart: {
        type: 'bar',
        height: 450
      },
      annotations: {
        xaxis: [{
          x: 140,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Yearly Average Career Earnings',
          }
        }],
        yaxis: [{
          y: topNames[2],
          y2: topNames[6],
        }]
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: topNames,
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#gInsert"), options);
      chart.render();
})


// function runningTable() {
//     switch(decadeChoice) {
//         case "1990s":
//             d3.json(athletesURL).then(function(athlData){
//                 Ndata = athlData.filter(athlData.year <= 1990 && athlData.year < 2000)
//             })
//         break;

//         case "2000s":

//         break;

//         case "2010s":

//         break;
//     };
// };
