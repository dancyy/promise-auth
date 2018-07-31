var User = require('../models/user');

module.exports = {
    getAllUsers: (params) => {
        return new Promise((resolve, reject) => {

            User.find(params, (err, users) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            });

        });
    }
}
