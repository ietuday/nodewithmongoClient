const express = require('express');
const app = express();

const companyRoutes = require('../company/companyRoutes');

app.use('/company', companyRoutes);

module.exports = app;