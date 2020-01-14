// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/aboutMe", function(request, response) {
  response.sendFile(__dirname + "/views/aboutMe.html");
});

app.get("/bootstrap", function(request, response) {
  response.sendFile(__dirname + "/views/bootstrap.html");
});

app.get("/alerts", function(request, response) {
  response.sendFile(__dirname + "/views/alerts.html");
});

app.get("/quiz", function(request, response) {
  response.sendFile(__dirname + "/views/quiz.html");
});

app.get("/filter", function(request, response) {
  response.sendFile(__dirname + "/views/filter.html");
});

app.get("/all", function(request, response) {
  response.sendFile(__dirname + "/views/all.html");
});

app.get("/array", function(request, response) {
  response.sendFile(__dirname + "/views/array.html");
});

app.get("/cat", function(request, response) {
  response.sendFile(__dirname + "/views/cat.html");
});

app.get("/draw", function(request, response) {
  response.sendFile(__dirname + "/views/draw.html");
});

app.get("/emojibattle", function(request, response) {
  response.sendFile(__dirname + "/views/emojibattle.html");
});

app.get("/news", function(request, response) {
  response.sendFile(__dirname + "/views/news.html");
});

app.get("/buttons", function(request, response) {
  response.sendFile(__dirname + "/views/buttons.html");
});

app.get("/buttons2", function(request, response) {
  response.sendFile(__dirname + "/views/buttons2.html");
});

app.get("/functions", function(request, response) {
  response.sendFile(__dirname + "/views/functions.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
