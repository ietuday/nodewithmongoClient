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

    // getStudentById: function (request, response) {
    //     const { id } = request.params;
    //     studentBusiness.getStudentById(id, (err, res) => {
    //         err ? response.send(err) : response.send(res)
    //     });
    // },

    // updateStudentById: function (request, response) {
    //     const { id } = request.params;
    //     const student = request.body;
    //     studentBusiness.updateStudentById(id, student, (err, res) => {
    //         err ? response.send(err) : response.send(res)
    //     });
    // },

    // deleteStudentById: function (request, response) {
    //     const { id } = request.params;
    //     studentBusiness.deleteStudentById(id, (err, res) => {
    //         err ? response.send(err) : response.send(res)
    //     });
    // }

}