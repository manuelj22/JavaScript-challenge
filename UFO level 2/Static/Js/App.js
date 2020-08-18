
let TableData = data;

let TableBody = d3.select('tbody');

let UFOForm = d3.select('.form-group');

let UFOClick = d3.select('#filter-btn');

UFOClick.on('click', runEnter);
function runEnter() {
    d3.event.preventDefault();

    let UFODates = d3.select('#datetime');
    let UFOFilterDates = UFOdate.property('value');

    let UFOCity = d3.select('#city');
    let UFOFilterCity = UFOcity.property('value');
 
    let UFOState = d3.select('#state');
    let UFOFilterState = UFOstate.property('value');

    let UFOcountry = d3.select('#country');
    let UFOFilterCountry = UFOcountry.property('value');
 
    let UFOShape = d3.select('#shape');
    let UFOFilteredShape = UFOshape.property('value');

    let Checker = false;
    let FilterTableData =TableData;

    if (UFOFilterDates !== ''){
        FilterTableData = FilterTableData.filter(UFO => UFO.datetime === UFOFilterDate);
        Checker = true;
    };  
    TableBody.html('');

    if (UFOfilteredCity !== ''){
        filterTableData = FilterTableData.filter(UFO => UFO.city === UFOfilteredCity);
        checker = true;
    };
    TableBody.html('');

    if (UFOfilteredState !== ''){
        FilterTableData = FilterTableData.filter(UFO => UFO.state === UFOfilteredState);
        Checker = true;
    };
    TableBody.html('');

    if (UFOfilteredCountry !== ''){
        FilterTableData = FilterTableData.filter(UFO => UFO.country === UFOFilterCountry);
        Checker = true;
    };
    TableBody.html('');

    if (UFOfilteredShape !== ''){
        FilterTableData = FilterTableData.filter(UFO => UFO.shape === UFOFiltedShape);
        checker = true;
    };
    TableBody.html('');
 
    if (Checker = true){
        FilterTableData.forEach((UFOFinalTable) => {
            let UFORow = TableBody.append('tr');
            Object.entries(UFOFinalTable).forEach(([key, value]) => {
              let UFOCell = UFOrow.append('td');
              UFOCell.text(value);
            });
          });
        };  
      };