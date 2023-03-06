const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/homey.html'));
});

app.listen(3000, function () {
  console.log('App started on port 3000');
});


