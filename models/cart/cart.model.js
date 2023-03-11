const mongoose = require('mongoose');
const CartProductModel = require('../cart/cart.product.model');

const cartModelSchema = new mongoose.Schema({
    email: { type: String },
    products: [
        CartProductModel.schema
    ],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', cartModelSchema);