var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');
var passport = require('passport');
var checkAuth = require('../middleware/checkAuth');

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

router.post('/createuser', (req,res, next) => {
  UserController.createUser(req.body)
  .then((user) => {
    res.json({
      message: 'success',
      user
    });
    return;
  })
  .catch(error => {
    res.json({
      message: 'Error',
      error
    });
    return;
  });
});

router.get('signup', function(req, res, next) {
  res.render('signup');
});

router.get('signup', function(req, res, next) {
  res.render('signup');
});

router.post('signin', passport.authenticate('local', {
  successRedirect: '/',
  failureDirect: '/users/signin',
  failureFlash: { type: 'error_msg', message: 'Invalid username or password!'}
}), function(req, res, next) {
  return;
});

module.exports = router;
