// Setup empty JS object to act as endpoint for all routes
projectData = {
    entries: []
};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder (same level with the server side code)
app.use(express.static('website'));


// Setup Server
//set the variable
const port = 8000;
//Utilize the .listen() method
const server = app.listen(port, listening);
//The listening function
function listening() {
    console.log("server running");
    console.log(`running on local host: ${port}`);
}
//Arrow Funtion
//const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});

//GET routes
app.get("/all", function(req, res) {
    res.send(projectData);
});

//POST routes
app.post('/addData', addData);
function addData (req, res) {
    //console.log(data);
    const dataEntry = {
        temp: req.body.temp,
        date: req.body.date,
        content: req.body.content
    };

    projectData.entries.push(dataEntry);
};

