const http = require('https');
const fs = require('fs');
const { Console } = require('console');

const file = fs.createWriteStream("file.csv");
const request = http.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv", function(response) {
  response.pipe(file);
});

var data = fs.readFileSync('file.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

console.log(data);
console.log(JSON.stringify(data, '', 2)); // as json
