const express = require('express');
const app = express();
app.use(express.json());

const productRoutes = require('../routes/productRoutes');
const inventoryReportsRoutes = require('../routes/inventoryReportsRoutes');

app.use('/api/v1', productRoutes);
app.use('/api/v1', inventoryReportsRoutes);
module.exports = app;
