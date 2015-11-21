var express = require('express');
var Q = require("q");
var request = require('request');
var _ = require('lodash');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
var url = 'mongodb://localhost:27017/development';

app.post('/api/news', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        var articles = db.collection("articles");

        articles.updateOne({_id: ObjectId(req.body.id)}, {$set: {'votes': req.body.vote}}, function(err, art) {
            res.send(art);
        });
    });
});

app.get('/api/news', function(req, res) {
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