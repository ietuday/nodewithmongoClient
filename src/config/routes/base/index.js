const express = require('express');
const app = express();

const companyRoutes = require('../company/companyRoutes');
const productRoutes = require('../product/productRoutes');

app.use('/company', companyRoutes);
app.use('/product', productRoutes);

module.exports = app;