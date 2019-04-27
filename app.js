// Dependencies
var express = require("express");
var path = require("path");

// Set up the express app
var app = express();
var PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.send("Welcome to the Star Wars Page!");
});


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});