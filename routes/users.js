var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserController.getAllUsers({})
    .then((users) => {
        res.json({
          message: 'Success', 
          users
      });
      return;
    })
    .catch((error) => {
      res.json({
        message: 'Failure',
        error
      });
    });
});

module.exports = router;
