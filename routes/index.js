var express = require('express');
var index = express.Router;

index.get('/', function(req, res, next) {
    res.render('index');
});

index.get('/search', function(req, res) {
    res.json('search routing');
});

module.exports = index;