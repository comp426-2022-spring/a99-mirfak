// var fs = require('fs'); 
// var parse = require('csv-parse');
// var parser = parse({columns: true}, function (err, records) {
// 	console.log(records);
// });

// fs.createReadStream(__dirname+'/chart-of-accounts.csv').pipe(parser);

const http = require('https');
const fs = require('fs');
const { Console } = require('console');

const file = fs.createWriteStream("file.csv");
const request = http.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv", function(response) {
  response.pipe(file);
});

// const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
//   data
//     .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
//     .split('\n')
//     .map(v => v.split(delimiter));

// console.log(CSVToArray(file))

// const path = require('path')

// var parse = require('csv-parse');
// console.log(path.resolve("file.csv"))


// var csvData=[];
// fs.createReadStream(path.resolve("file.csv"))
//     .pipe(parse.parse({delimiter: ','}))
//     .on('data', function(csvrow) {
//         console.log(csvrow);
//         //do something with csvrow
//         csvData.push(csvrow);        
//     })
//     .on('end',function() {
//       //do something with csvData
//       console.log(csvData);
//     });

var data = fs.readFileSync('file.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

console.log(data);
console.log(JSON.stringify(data, '', 2)); // as json
