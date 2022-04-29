const express = require('express');
const app = express();
const { argv } = require('process');
const morgan = require('morgan')
const fs = require('fs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const http = require('https');

// Get Port
const args = require("minimist")(process.argv.slice(2));
var port = args.port || 5555;

// Start an app server
const server = app.listen(port, () => {
  console.log('App listening on port %PORT%'.replace('%PORT%',port));
});

app.use(express.static('./template/src'))

app.get('/app/data/', (req, res) => {
  const file = fs.createWriteStream("./covid_data/national.csv");
  const request = http.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv", function(response) {
  response.pipe(file);
});

var data = fs.readFileSync('./covid_data/national.csv')
  .toString() // convert Buffer to string
  .split('\n') // split string to lines
  .map(e => e.trim()) // remove white spaces for each line
  .map(e => e.split(',').map(e => e.trim())); // split each line to array
  
  res.status(200).json({ "date" : data[data.length-1][0], "cases": data[data.length-1][1], "deaths": data[data.length-1][2] })
});

app.get('/app/states/', (req, res) => {
  const newfile = fs.createWriteStream("./covid_data/states.csv");
  const request = http.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv", function(response) {
  response.pipe(newfile);
});

var states = fs.readFileSync('./covid_data/states.csv')
  .toString() // convert Buffer to string
  .split('\n') // split string to lines
  .map(e => e.trim()) // remove white spaces for each line
  .map(e => e.split(',').map(e => e.trim())); // split each line to array

  res.status(200).json(states.splice(states.length-56, states.length-1))
});

app.use(require('./middleware/access_middleware'))

// Logging to database
// Use morgan for logging to files
// Create a write stream to append (flags: 'a') to a file
const accesslog = fs.createWriteStream('./database/access.log', { flags: 'a' })
// Set up the access logging middleware
app.use(morgan('accesslog', { stream: accesslog }))


// Default API endpoint that returns 404 Not found for any endpoints that are not defined.
app.use(function(req, res){
  const statusCode = 404
  const statusMessage = 'NOT FOUND'
  res.status(statusCode).end(statusCode+ ' ' +statusMessage)
});

// Tell STDOUT that the server is stopped
process.on('SIGINT', () => {
  server.close(() => {
  console.log('\nApp stopped.');
});
});