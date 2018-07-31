var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController');

/* GET the Product page. */
router.get('/', function(req, res, next) {
    ProductController.getAllProducts({})
        .then( products => {
            res.json({
                message: 'success',
                data: products
            });
            return;
        })
        .catch(error => {
            res.json({
                message: 'Failure',
                data: error
            });
            return;
        });
});

router.post('/createproduct', function(req, res, next) {
    ProductController.createProduct(req.body)
        .then(product => {
            res.json({
                message: 'Success', 
                data: product
            });
            return;
        })
        .catch(error => {
            res.json({
                message: 'Could not create product', 
                data: error
            });
            return;
        });
});

module.exports = router;
