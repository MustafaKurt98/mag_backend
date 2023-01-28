const mongoose = require('mongoose');
const MagProductModel = require('../../models/product/mag.products.model');

const cartModelSchema = new mongoose.Schema({
    userId: { type: String },
    products: [
        MagProductModel.schema
        
    ],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartModelSchema);