const companyBusiness = require('../../app/business/company/companyBusiness');

module.exports = {

    addCompany: function (request, response) {
        const company = request.body;
        companyBusiness.addCompany(company, (err, res) => {
            err ? response.send(err) : response.send(res)
        });
    },

    getAllCompanies: function (request, response) {
        companyBusiness.getAllCompanies((err, res) => {
            err ? response.send(err) : response.send(res)
        });
    },

    getCompanyById: function (request, response) {
        const { id } = request.params;
        companyBusiness.getCompanyById(id, (err, res) => {
            err ? response.send(err) : response.send(res)
        });
    },

    updateCompanyById: function (request, response) {
        const { id } = request.params;
        const company = request.body;
        companyBusiness.updateCompanyById(id, company, (err, res) => {
            err ? response.send(err) : response.send(res)
        });
    },

    deleteCompanyById: function (request, response) {
        const { id } = request.params;
        companyBusiness.deleteCompanyById(id, (err, res) => {
            err ? response.send(err) : response.send(res)
        });
    }

}