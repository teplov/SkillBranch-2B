'use strict'

var express = require('express');
let app = express();

var name = require('./name.js');

app.get('/', function (req, res) {
  let fullName = req.query.fullname || null;
  var shortName = name(fullName);
  res.send(shortName);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
