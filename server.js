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

app.get('/app/covid/:state', (req, res, next) => {
    const state = flipACoin(req.params.state) //create new function instead of flipACoin
    res.status(200).json(state)
})
app.get('/app/data/', (req, res) => {
  const file = fs.createWriteStream("national.csv");
  const request = http.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv", function(response) {
  response.pipe(file);
});

var data = fs.readFileSync('national.csv')
  .toString() // convert Buffer to string
  .split('\n') // split string to lines
  .map(e => e.trim()) // remove white spaces for each line
  .map(e => e.split(',').map(e => e.trim())); // split each line to array
  
  res.status(200).json({ "date" : data[data.length-1][0], "cases": data[data.length-1][1], "deaths": data[data.length-1][2] })
});

app.get('/app/states/', (req, res) => {
  const newfile = fs.createWriteStream("states.csv");
  const request = http.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv", function(response) {
  response.pipe(newfile);
});

var states = fs.readFileSync('states.csv')
  .toString() // convert Buffer to string
  .split('\n') // split string to lines
  .map(e => e.trim()) // remove white spaces for each line
  .map(e => e.split(',').map(e => e.trim())); // split each line to array

  
  //for (let i = 0; i < states.length; i++) {
  res.status(200).json(states)
  //res.status(200).send("it works!");.splice(states.length-56, states.length-1)
  //}
});