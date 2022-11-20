var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My todos' });
});
router.get('/', function(req,res){
  res.post("My todos")
} );
module.exports = router;
