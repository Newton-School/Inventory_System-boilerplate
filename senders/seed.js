const Product = require('../models/productModel');

const products = [
  {
    name: 'Product 1',
    price: 50,
    quantity: 8,
  },
  {
    name: 'Product 2',
    price: 30,
    quantity: 15,
  },
  {
    name: 'Product 3',
    price: 40,
    quantity: 9,
  },
  {
    name: 'Product 4',
    price: 25,
    quantity: 17,
  },
  {
    name: 'Product 5',
    price: 60,
    quantity: 22,
  },
  {
    name: 'Product 6',
    price: 60,
    quantity: 65,
  },
  {
    name: 'Product 7',
    price: 60,
    quantity: 2,
  },
  {
    name: 'Product 8',
    price: 60,
    quantity: 5,
  },
  {
    name: 'Product 9',
    price: 60,
    quantity: 35,
  },
  {
    name: 'Product 10',
    price: 60,
    quantity: 55,
  },
];

const seedProducts = async () => {
  try {
    await Product.create(products);
    console.log('Seed: Initial data seeded successfully');
  } catch (error) {
    console.error('Seed: Error seeding initial data:', error);
  }
};

module.exports = seedProducts;
