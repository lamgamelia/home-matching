const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: "http://localhost:8000"
  })
)

app.use(express.static(path.join(__dirname, '../public')));

app.use('/node_modules/bootstrap/dist/css/bootstrap.min.css', (req, res, next) => {
  res.type('text/css');
  res.sendFile(path.join(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.min.css'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/homey.html'));
});

app.listen(3000, function () {
  console.log('App started on port 3000');
});
