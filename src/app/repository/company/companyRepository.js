const mongoQuery = require('../base/index');

module.exports = {

    addCompany: function (company, callback) {
        mongoQuery.insertDocument('company', company, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        })
    },

    getAllCompanies: function (callback) {
        mongoQuery.findDocument('company', {}, (err, res) => {
            err ? callback(err, null) : callback(null, res)
        });
    },

    getCompanyById: function (id, callback) {
        mongoQuery.findDocument('company',{ id:id }, (err, res) => {
            err ? callback(err, null) : callback(null, res);
        })
    },
    
    // getStudentById: function (id, callback) {
    //     StudentSchema.findOne({ id: id }, (err, res) => {
    //         err ? callback(err, null) : callback(null, res);
    //     })
    // },

    // updateStudentById: function (id, student, callback) {
    //     StudentSchema.findOneAndUpdate({ id: id }, student, { new: true }, (err, res) => {
    //         err ? callback(err, null) : callback(null, res);
    //     })
    // },

    // deleteStudentById: function (id, callback) {
    //     StudentSchema.findOneAndDelete({ id: id }, (err, res) => {
    //         err ? callback(err, null) : callback(null, res);
    //     })
    // }

}