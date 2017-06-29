var express = require('express');
var router = express.Router();

router.get('/webdev', function(req, res) {
    res.render('admin/admin-data.html');
});


module.exports = router;