const router = require("express").Router();

const companyController = require("../../../controller/company/companyController");

router.post('/add-company', companyController.addCompany);
router.get('/get-all-companies', companyController.getAllCompanies);
router.get('/get-company-by-id/:id', companyController.getCompanyById);
router.put('/update-company-by-id/:id', companyController.updateCompanyById);
router.delete('/delete-company-by-id/:id', companyController.deleteCompanyById);

module.exports = router;