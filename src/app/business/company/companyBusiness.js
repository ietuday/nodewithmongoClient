const companyRepository = require('../../repository/company/companyRepository');

module.exports = {

    addCompany: function (company, callback) {
        companyRepository.addCompany(company, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    getAllCompany: function (callback) {
        companyRepository.getAllCompany((err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    getCompanyById: function (id, callback) {
        companyRepository.getCompanyById(id, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    updateCompanyById: function (id, company, callback) {
        companyRepository.updateCompanyById(id, company, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    deleteCompanyById: function (id, callback) {
        companyRepository.deleteCompanyById(id, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    }

}