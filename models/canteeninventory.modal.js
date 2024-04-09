const mongoose = require('mongoose');

// Define the schema for Canteen Inventory
const canteenInventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  description: String,
  itemCategory: String,
  quantity: {
    type: String,
    required: true
  },
  unitPrice: {
    type: String,
  },
  totalCost: {
    type: String,
  },
  purchaseDate: {
    type: String,
  },
  supplierName: String,
  supplierAddress: String,
  supplierContact: String
});

// Create a model based on the schema
const CanteenInventory = mongoose.model('CanteenInventory', canteenInventorySchema);

module.exports = CanteenInventory;
