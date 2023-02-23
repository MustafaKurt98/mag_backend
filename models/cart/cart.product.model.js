const mongoose = require('mongoose');

const cartProductModelSchema = new mongoose.Schema({
    name: { type: String },
    code: { type: [String] },
    netweight: { type: String },
    relatedPart: { type: String },
    partNumber: { type: String },
    compatibledescription: [
        {
            parca: { type: String },
            list:
                [
                    String
                ]
        }
    ],
    image: { type: [String] },
    quantity: { type: Number },
});

module.exports = mongoose.model('CartProduct', cartProductModelSchema);