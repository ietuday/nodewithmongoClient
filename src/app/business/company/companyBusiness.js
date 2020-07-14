const companyRepository = require('../../repository/company/companyRepository');

module.exports = {

    addCompany: function (company, callback) {
        companyRepository.addCompany(company, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    getAllCompanies: function (callback) {
        companyRepository.getAllCompanies((err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    getCompanyById: function (id, callback) {
        companyRepository.getCompanyById(id, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    // getStudentById: function (id, callback) {
    //     studentRepository.getStudentById(id, (err, res) => {
    //         err ? callback(err, null) : callback(null, res)
    //     });
    // },

    // updateStudentById: function (id, student, callback) {
    //     studentRepository.updateStudentById(id, student, (err, res) => {
    //         err ? callback(err, null) : callback(null, res)
    //     });
    // },

    // deleteStudentById: function (id, callback) {
    //     studentRepository.deleteStudentById(id, (err, res) => {
    //         err ? callback(err, null) : callback(null, res)
    //     });
    // }

}