const mongoose = require('mongoose');

const labEquipmentSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  sysConfig: {
    type: String
  },
  quantity: {
    type: Number,
  },
  unitPrice: {
    type: Number,
  },
  totalCost: {
    type: Number,
  },
  invoiceNo: {
    type: String
  },
  purchaseDate: {
    type: Date
  },
  warranty: {
    type: String
  },
  supplierAddress: {
    type: String
  },
  supplierAddress: {
    type: String
  },
  supplierContact: {
    type: String
  }
});

const LabEquipment = mongoose.model('LabEquipment', labEquipmentSchema);

module.exports = LabEquipment;
