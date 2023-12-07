const Product = require('../models/productModel');

exports.getLowInventoryProducts = async (req, res) => {
  try {
    const lowInventoryProducts = await Product.find({ quantity: { $lt: 10 } });
    res.json(lowInventoryProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getTotalInventoryValue = async (req, res) => {
  try {
    const totalValue = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalValue: { $sum: { $multiply: ['$quantity', '$price'] } },
        },
      },
    ]);
    res.json({ totalValue: totalValue[0].totalValue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
