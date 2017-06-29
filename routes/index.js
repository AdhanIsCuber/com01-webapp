var express = require('express');
var index = express.Router();


index.get('/', function(req, res, next) {
    res.render('index.html');
});

index.get('/search', function(req, res, next) {
    res.render('search#search.html');
});

index.get('/404', function(req, res, next) {
    res.render('404.html');
});

index.get('/detail', function(req, res, next) {
    res.render('detail.html');
});

module.exports = index;