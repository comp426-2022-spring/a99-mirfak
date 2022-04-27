const http = require('https');
const fs = require('fs');


const args = require('minimist')(process.argv.slice(2))
var express = require("express")
var app = express()
// Require fs

const morgan = require('morgan')
// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Server port
const port = args.port || args.p || 5555
// Start server
const server = app.listen(port, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",port))
});

// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    // res.json({"message":"Your API works! (200)"});
    res.status(200).send("it works!");
	// res.status(200);
});

// Endpoint /app/flip/ that returns JSON {"flip":"heads"} or {"flip":"tails"} 
// corresponding to the results of the random coin flip.
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
    response.pipe(file);
});

var states = fs.readFileSync('states.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

    
    //for (let i = 0; i < states.length; i++) {
        res.status(200).json({ "date" : states[0][0], "state": states[0][1], "cases": states[0][3], "deaths": states[0][4] })
    
});

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