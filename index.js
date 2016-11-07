'use strict'

var express = require('express');
let app = express();

var name = require('./name.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  let fullName = req.query.fullname || null;
  var shortName = name(fullName);
  res.send(shortName);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
