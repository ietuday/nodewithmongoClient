const mongoQuery = require('../base/index');
const ObjectId = require('mongodb').ObjectID;


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
        mongoQuery.findOneDocument('company', { _id: ObjectId(id) }, (err, res) => {
            err ? callback(err, null) : callback(null, res);
        })
    },

    updateCompanyById: function (id, company, callback) {
        mongoQuery.updateOldArrayDocument1('company', { _id: ObjectId(id) }, company, (err, res) => {
            err ? callback(err, null) : callback(null, res);
        })
    },

    deleteCompanyById: function (id, callback) {
        mongoQuery.deleteDocument('company', { _id: ObjectId(id) }, (err, res) => {
            err ? callback(err, null) : callback(null, res);
        })
    }

}