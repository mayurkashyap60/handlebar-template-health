const express = require("express");
const hbs = require('hbs')

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  res.send("<h1>Helllo Express</h1>");
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About us page',
    text: 'Body text here'
  });
});

app.listen(3000, () => {
  console.log("Current port running is 3000");
});
