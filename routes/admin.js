var express = require('express');
var admin = express.Router();

admin.get('/', function(req, res, next) {
    res.redirect('/admin/login');
});

admin.get('/login', function(req, res, next) {
    res.render('admin/admin-login.html');
});

admin.get('/dashboard', function(req, res, next) {
    res.render('admin/admin-dashboard.html');
});

admin.get('/data', function(req, res, next) {
    res.render('admin/admin-data.html');
});

admin.get('/kategori', function(req, res, next) {
    res.render('admin/admin-kategori.html');
});

admin.get('/addnew', function(req, res, next) {
    res.render('admin/admin-addnew.html');
});

admin.get('/data-kontribusi', function(req, res, next) {
    res.render('admin/admin-kontribusi.html');
});

admin.get('/revision', function(req, res, next) {
    res.render('admin/admin-revision.html');
});

module.exports = admin;