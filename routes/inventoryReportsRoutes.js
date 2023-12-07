const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryReportsController');

router.get('/inventory/reports', inventoryController.getLowInventoryProducts);
router.get('/inventory/value', inventoryController.getTotalInventoryValue);

module.exports = router;
