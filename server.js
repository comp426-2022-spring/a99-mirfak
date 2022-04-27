const express = require('express');
const app = express();
const { argv } = require('process');
const morgan = require('morgan')
const fs = require('fs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

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
