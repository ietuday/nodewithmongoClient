const companyBusiness = require('../../app/business/company/companyBusiness');
const utility = require('../helper/utility');

module.exports = {

    addCompany: function (request, response) {
        const company = request.body;
        companyBusiness.addCompany(company, (err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(201).send(utility.generateResponse(201, 'company created', true, res))
        });
    },

    getAllCompany: function (request, response) {
        companyBusiness.getAllCompany((err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(201).send(utility.generateResponse(200, 'all company', true, res))
        });
    },

    getCompanyById: function (request, response) {
        const { id } = request.params;
        companyBusiness.getCompanyById(id, (err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(201).send(utility.generateResponse(200, 'company', true, res))
        });
    },

    updateCompanyById: function (request, response) {
        const { id } = request.params;
        const company = request.body;
        companyBusiness.updateCompanyById(id, company, (err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(201).send(utility.generateResponse(200, 'company updated', true, res))
        });
    },

    deleteCompanyById: function (request, response) {
        const { id } = request.params;
        companyBusiness.deleteCompanyById(id, (err, res) => {
            err 
            ? 
            response.status(404).send(utility.generateResponse(404, err, false, null)) 
            : 
            response.status(201).send(utility.generateResponse(200, 'company deleted', true, res))
        });
    }

}