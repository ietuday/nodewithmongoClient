const productRepository = require('../../repository/product/productRepository');

module.exports = {

    addProduct: function (product, callback) {
        productRepository.addProduct(product, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    getAllProduct: function (callback) {
        productRepository.getAllProduct((err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    getProductById: function (id, callback) {
        productRepository.getProductById(id, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    updateProductById: function (id, product, callback) {
        productRepository.updateProductById(id, product, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    deleteProductById: function (id, callback) {
        productRepository.deleteProductById(id, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    }

}