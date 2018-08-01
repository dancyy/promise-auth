var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController');
var multer = require('multer');
var uuid = require('uuid');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: function(req, file, cb) {
        cb(null, uuid() + '.jpg');
    }
});

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

router.get('/:id', function(req, res, next) {
    ProductController.getProductById(req.params.id)
        .then(product => {
            res.render('product-page', { product })
            return;
        })
        .catch(err => {
            res.json({
                message: 'Error getting product',
                err
            });
            return;
        });
});

router.get('/createproduct', function(req, res, next) {
    res.render('createproduct');
});

var upload = multer({storage: storage});

router.post('/createproduct', upload.single('productPicture'), function(req, res, next) {
    let productPicture;
    if(req.file) {
        productPicture = req.file.filename;
    } else {
        productPicture = 'noimage.jpg';
    }
    req.body.productPicture = productPicture;

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
