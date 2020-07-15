const mongoQuery = require('../base/index');
const ObjectId = require('mongodb').ObjectID;

module.exports = {

    addProduct: function (product, callback) {
        mongoQuery.insertDocument('product', product, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        })
    },

    getAllProduct: function (callback) {
        mongoQuery.findDocument('product', {}, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    getProductById: function (id, callback) {
        mongoQuery.findOneDocument('product', { _id: ObjectId(id) }, (err, res) => {
            err ? callback(err, null) : callback(null, res);
        })
    },

    updateProductById: function (id, product, callback) {
        mongoQuery.updateOldArrayDocument1('product', { _id: ObjectId(id) }, product, (err, res) => {
            err ? callback(err, null) : callback(null, res);
        })
    },

    deleteProductById: function (id, callback) {
        mongoQuery.deleteDocument('product', { _id: ObjectId(id) }, (err, res) => {
            err ? callback(err, null) : callback(null, res);
        })
    }

}