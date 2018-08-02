module.exports = {
    isLoggedIn: (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        } else {
            req.flash('error_msg', 'Sign up of sign in to see this page');
            req.redirect('/users/signin');
        }
    }
};