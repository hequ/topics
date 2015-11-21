var express = require('express');
var Q = require("q");
var request = require('request');
var _ = require('lodash');
var rssParser = require('rss-parse-promise');

var app = express();
app.use(express.static('public'));

app.get('/news', function (req, res) {
    rssParser('http://rss.cnn.com/rss/edition_world.rss').then(function (value) {
        res.send(_.pluck(value, 'title'));
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});