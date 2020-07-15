const productBusiness = require('../../app/business/product/productBusiness');
const utility = require('../helper/utility');

module.exports = {

    addProduct: function (request, response) {
        const product = request.body;
        productBusiness.addProduct(product, (err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(201).send(utility.generateResponse(201, 'product created', true, res))
        });
    },

    getAllProduct: function (request, response) {
        productBusiness.getAllProduct((err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(200).send(utility.generateResponse(200, 'all product', true, res))
        });
    },

    getProductById: function (request, response) {
        const { id } = request.params;
        productBusiness.getProductById(id, (err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(200).send(utility.generateResponse(200, 'product', true, res))
        });
    },

    updateProductById: function (request, response) {
        const { id } = request.params;
        const product = request.body;
        productBusiness.updateProductById(id, product, (err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(200).send(utility.generateResponse(200, 'product updated', true, res))
        });
    },

    deleteProductById: function (request, response) {
        const { id } = request.params;
        productBusiness.deleteProductById(id, (err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(200).send(utility.generateResponse(200, 'product deleted', true, res))
        });
    }

}