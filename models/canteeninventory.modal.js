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
    type: Number,
    required: true
  },
  unitIn: {
    type: String,
  },
  unitPrice: {
    type: Number,
  },
  totalCost: {
    type: Number,
  },
  purchaseDate: {
    type: Date,
  },
  supplierName: String,
  supplierAddress: String,
  supplierContact: String
});

// Create a model based on the schema
const CanteenInventory = mongoose.model('CanteenInventory', canteenInventorySchema);

module.exports = CanteenInventory;
