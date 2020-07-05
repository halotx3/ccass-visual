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
        var table = document.getElementById('YearlyTable')
        table.innerHTML = ''
        for (var i = 0; i < 10; i++){
            var row = `<tr>
                            <td>${cel_data[i].name}</td>
                            <td>${cel_data[i].category}</td>
                            <td>${cel_data[i].pay}</td>
                    </tr>`
            table.innerHTML += row
        }
     });
    }
};


//Good code below here:
// d3.json(athurl).then(function(ath_data) {
//     var table = document.getElementById('YearlyTable')

//     for (var i = 0; i < ath_data.length; i++){
//         var row = `<tr>
//                         <td>${ath_data[i].name}</td>
//                         <td>${ath_data[i].sport}</td>
//                         <td>${ath_data[i].earnings}</td>
//                 </tr>`
//         table.innerHTML += row
//     }
//  });




// d3.json(celurl).then(function(cel_data) {
//     var table = document.getElementById('YearlyTable')

//     for (var i = 0; i < cel_data.length; i++){
//         var row = `<tr>
//                         <td>${cel_data[i].name}</td>
//                         <td>${cel_data[i].category}</td>
//                         <td>${cel_data[i].pay}</td>
//                 </tr>`
//         table.innerHTML += row
//     }
//  });