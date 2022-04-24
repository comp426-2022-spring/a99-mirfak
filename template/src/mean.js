
//export function mean() {
/*     const api_url = "https://api.purpleair.com/v1/groups/954/members?fields=latitude%2Clongitude%2Cpm2.5_cf_1&api_key=6690E52E-B5BF-11EC-B330-42010A800004";
    const response = await fetch(api_url);
    var dataJS = await response.json();

    const {data} = dataJS;

    var mean_25;
    // var mean_1;
    // var mean_10;

    for (let i = 0; i < data.length; i++) {
        const pm_25 = data[i][3];
        mean_25 += pm_25;
        // const pm_1 = data[i][4];
        // mean_1 += pm_1;
        // const pm_10 = data[i][5];
        // mean_10 += pm_10;
    }

    mean_25 = mean_25 / data.length;
    // mean_1 = mean_1 / data.length;
    // mean_10 = mean_10 / data.length;
    return mean_25.toString; */

    const http = require('https');
    const fs = require('fs');
    const { Console } = require('console');


    const file = fs.createWriteStream("national.csv");
    const request = http.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv", function(response) {
    response.pipe(file);
});

var data = fs.readFileSync('national.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

document.getElementById("date").innerHTML = data[data.length-1][0]
document.getElementById("cases").innerHTML = data[data.length-1][1]
document.getElementById("deaths").innerHTML = data[data.length-1][2]
