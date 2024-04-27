const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  departmentName: {
    type: String,
  },
  room: {
    type: String,
  },
  unitIn: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  updatedQuantity: {
    type: Number,
  },
  date: {
    type: Date,
  },
  itemCategory: {
    type: String,
  },
  purchaseDate: {
    type: Date,
  },
  unitCost: {
    type: Number,
  },
  totalCost: {
    type: Number,
  },
  condition: {
    type: String,
  },
  warranty: {
    type: String,
    default: '' // Assuming warranty can be empty
  },
  supplierName: {
    type: String,
  },
  supplierAddress: {
    type: String,
  },
  supplierContact: {
    type: String,
  }
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
