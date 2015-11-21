var express = require('express');
var Q = require("q");
var request = require('request');
var _ = require('lodash');

var app = express();

app.get('/', function (req, res) {
    var rssParser = require('rss-parse-promise');
    rssParser('http://www.echojs.com/rss').then(function(value) {
       res.send(value);
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});