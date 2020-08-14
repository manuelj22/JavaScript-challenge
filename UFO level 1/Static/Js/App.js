
let tableData = data;

console.log(tableData);

let tablebody = d3.select('tbody');

tableData.forEach(function(UFO) {
    console.log(UFO);

    let UFOrow = tablebody.append('tr');

    Object.entries(UFO).forEach(function([key, value]) {
      console.log(key, value);

      let UFOcell = UFOrow.append('td');
      UFOcell.text(value);
    });
});


let UFObutton = d3.select('#filter-btn');
UFObutton.on('click', function() {
    tablebody.html('');

    let UFOdate = d3.select('#datetime');

    let UFOvalues = UFOdate.property('value');
    console.log(UFOvalues);

    let UFOfiltered = tableData.filter(UFO => UFO.datetime === UFOvalues);
    console.log(UFOfiltered);
    UFOfiltered.forEach(function(selections) {
    console.log(selections);

    let UFOrow = tablebody.append('tr');

    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        let UFOcell = UFOrow.append('td');
        UFOcell.text(value);
    });
});
});

