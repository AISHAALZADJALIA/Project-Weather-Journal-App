// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Middleware to parse JSON request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup CORS middleware
const cors = require('cors');
app.use(cors());

//*Initalize the main project
app.use(express.static('website'));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on localhost ${PORT}`);
});


// Get route that returns projectData
app.get('/add',(req, res) => {
    res.send(projectData);
});

// Post Route that add data to project DATA
app.post('/add', (req, res) => {
    const newData = req.body;  
    Object.assign(projectData, newData);
    console.log(projectData);
    res.send(projectData);
});