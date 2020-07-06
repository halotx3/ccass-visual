//
const athurl = "http://serene-beach-38826.herokuapp.com/api/v1/athletes/year/";
const celurl = "http://serene-beach-38826.herokuapp.com/api/v1/celebrities/year/";

d3.json(athurl+2005).then(function(ath_data) {
    var table = document.getElementById('YearlyTable')

    for (var i = 0; i < 10; i++){
        var row = `<tr>
                        <td>${ath_data[i].name}</td>
                        <td>${ath_data[i].sport}</td>
                        <td>${ath_data[i].earnings}</td>
                </tr>`
        table.innerHTML += row
    }
 });

d3.selectAll("#selDataset").on("change", updateTable);
d3.selectAll("#selDateYear").on("change", updateTable);

function updateTable() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    var yeardropdownMenu = d3.select("#selDateYear");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    var yearset = yeardropdownMenu.property("value");


    if (dataset === 'Athlete') {
        d3.json(athurl+yearset).then(function(ath_data) {
            var table = document.getElementById('YearlyTable')
            table.innerHTML = ''
            for (var i = 0; i < 10; i++){
                var row = `<tr>
                                <td>${ath_data[i].name}</td>
                                <td>${ath_data[i].sport}</td>
                                <td>${ath_data[i].earnings}</td>
                        </tr>`
                table.innerHTML += row
            }    
         });
    }

    if (dataset === 'Celebrity') {
        d3.json(celurl+yearset).then(function(cel_data) {
            comparePay = compareValues('pay', 'desc');    // new
            var sorted_cel_data = cel_data.sort(comparePay);    // new
            var table = document.getElementById('YearlyTable')
            table.innerHTML = ''
            for (var i = 0; i < 10; i++){
                var row = `<tr>
                                <td>${sorted_cel_data[i].name}</td>
                                <td>${sorted_cel_data[i].category}</td>
                                <td>${sorted_cel_data[i].pay}</td>
                        </tr>`
                table.innerHTML += row
        }
     });
    }
};

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }
    const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return ((order === 'desc') ? (comparison * -1) : comparison);
  };
}