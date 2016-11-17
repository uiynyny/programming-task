const express = require('express');
const bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
var connection = require('./connection');
var routes = require('./routes');

connection.init();
routes.configure(app);

var server = app.listen(3000,function () {
  console.log(`server running on port ${server.address().port}`);
});
