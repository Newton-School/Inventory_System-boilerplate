const Product = require('../models/productModel');

exports.getLowInventoryProducts = async (req, res) => {
  try {
    // TODO: Fetch products with quantity less than 10 from the database
    // TODO: Send the low inventory products as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getTotalInventoryValue = async (req, res) => {
  try {
    // TODO: Calculate the total value of the entire inventory using aggregation
    // TODO: Send the total inventory value as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
