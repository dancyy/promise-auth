var Product = require('../models/Product');

module.exports = {
    getAllProducts: (params) => {
        return new Promise((resolve, reject) => {

            Product.find(params)
                .then(products => resolve(products))
                .catch(error => reject(error));
                
        });
    },

    getProductById: (id) => {
        return new Promise((resolve, reject) => {
            Product.findById(id)
                .then(product => resolve(product))
                .catch(err => reject(err))
        });
    },

    createProduct: (params) => {
        return new Promise((resolve, reject) => {
            
            const newProduct = new Product({
                productName: params.productName,
                category: params.category,
                price: params.price,
                description: params.description,
                productPicture: params.productPicture
            });

            newProduct.save()
                .then(product => resolve(product))
                .catch(error => reject(error));

        });
    }
};
