const mongoose = require('mongoose');

const labEquipmentSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  sysConfig: {
    type: String
  },
  quantity: {
    type: String,
  },
  unitPrice: {
    type: String,
  },
  totalCost: {
    type: String,
  },
  invoiceNo: {
    type: String
  },
  purchaseDate: {
    type: String
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
