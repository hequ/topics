var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('App listening at http://%s:%s', host, port);
});
