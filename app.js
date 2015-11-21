var express = require('express');
var Q = require("q");
var request = require('request');
var _ = require('lodash');
var rssParser = require('rss-parse-promise');
var MongoClient = require('mongodb').MongoClient;



var app = express();
app.use(express.static('public'));
var url = 'mongodb://localhost:27017/development';

app.get('/api/news', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        var articles = db.collection("articles");

        articles.find({}).toArray(function(err, art) {
            res.send(art);
        });
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});