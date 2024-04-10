const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, "Please enter an item name"],
    },
    systemConfiguration: {
        type: String,
        required: [true, "Please enter system configuration"],
    },
    quantity: {
        type: Number,
        required: [true, "Please enter quantity"],
    },
    unitPrice: {
        type: Number,
        required: [true, "Please enter unit price"],
    },
    invoiceNo: {
        type: String,
        required: [true, "Please enter invoice number"],
    },
    purchaseDate: {
        type: Date,
        required: [true, "Please enter purchase date"],
    },
    expiryDate: {
        type: Date,
        required: [true, "Please enter expiry date"],
    },
    supplierName: {
        type: String,
        required: [true, "Please enter supplier name"],
    },
    categoryName: {
        type: String,
        required: [true, "Please enter category name"],
    },
    supplierAddress: {
        type: String,
        required: [true, "Please enter supplier address"],
    },
    supplierContactNumber: {
        type: String,
        required: [true, "Please enter supplier contact number"],
    }
}, {
    timestamps: true
});

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;
