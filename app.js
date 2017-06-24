var express = require('express');
var path = require('path');
//var index = require('./routes/index');

var app = express();

// view engine 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'assets')));

//app.use('/', index);


// routes
app.get('/', function(req, res, next) {
    res.render('index.html');
});

app.get('/kategori', function(req, res, next) {
    res.render('kategori#kategori.html');
});


var server = app.listen(3000, function() {
    console.log('server start on http://127.0.0.1:3000');
})

module.exports = app;