const mongoose = require('mongoose');

const magproductsSchema = new mongoose.Schema({
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
    ]
});

module.exports = mongoose.model('MagProducts', magproductsSchema);