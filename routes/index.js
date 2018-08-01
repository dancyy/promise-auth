var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController');

/* GET home page. */
router.get('/', function(req, res, next) {
 ProductController.getAllProducts({})
  .then((products) => {
    res.render('index', { products : products });
  }) 
  .catch((err) => {
    res.render('error', {message: 'Error', error: error});
  });
});

module.exports = router;
