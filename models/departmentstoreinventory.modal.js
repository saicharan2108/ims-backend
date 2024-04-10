const mongoose = require('mongoose');

const InventoryItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
    },
    itemCategory: {
        type: String,
    },
    unitMeasurement: {
        type: String,
    },
    purchaseDate: {
        type: Date,
    },
    quantity: {
        type: Number,
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
}, {
    timestamps: true
});

const DepartmentStoreInventory = mongoose.model('DeparmentStoreInventory', InventoryItemSchema);

module.exports = DepartmentStoreInventory;
