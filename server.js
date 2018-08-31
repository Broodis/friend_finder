// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express
var app = express();
var PORT = 3000;

// Express Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Link to routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });