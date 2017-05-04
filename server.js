'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send("HELLO WORLD!");
});

app.get('/:operation/:x/:y', function(req, res) {
  const operators = {
    add: "+",
    sub: "-",
    mult: "*",
    div: "/"
  };
  const operator = operators[req.params.operation];

  try {
    const result = eval(req.params.x + operator + req.params.y);
    res.send(result.toString());
  }
  catch (error) {
    res.send(error);
  }

});

app.listen(3000, function() {
  console.log("STARTING SERVER ON 3000");
});
