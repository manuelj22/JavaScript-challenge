
let TableData = data;

console.log(TableData);

let TableBody = d3.select('tbody');

TableData.forEach(function(UFO) {
    console.log(UFO);

    let UFORow = TableBody.append('tr');

    Object.entries(UFO).forEach(function([key, value]) {
      console.log(key, value);

      let UFOCell = UFORow.append('td');
      UFOCell.text(value);
    });
});


let UFOClick = d3.select('#filter-btn');
UFOClick.on('click', function() {
    TableBody.html('');

    let UFODates = d3.select('#datetime');

    let UFOValues = UFODates.property('value');
    console.log(UFOvalues);

    let UFOFilter = TableData.filter(UFO => UFO.datetime === UFOValues);
    console.log(UFOFilter);
    UFOFilter.forEach(function(selections) {
    console.log(selections);

    let UFORow = tablebody.append('tr');

    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        let UFOCell = UFORow.append('td');
        UFOCell.text(value);
    });
});
});