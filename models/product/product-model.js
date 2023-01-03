const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String },
    stockCode: { type: String },
    name: { type: String },
    price: { type: String },
    price2: { type: String },
    price11: { type: String },
    discount: { type: Number },
    offerEnd: { type: String },
    new: { type: Boolean },
    rating: { type: Number },
    saleCount: { type: Number },
    category: { type: [String] },
    tag: { type: [String] },
    salCurrency: { type: String },
    matType: { type: String },
    netWeight: { type: String },
    stext: { type: String },
    skUnit: { type: String },
    isChecked: { type: String },
    salItemType: { type: String },
    assavStock: { type: String },
    tmpStock: { type: String },
    degisen: { type: [String] },
    tessure: { type: String },
    fotokode: { type: String },
    matGrp: { type: String },
    webDetay: { type: String },
    webKategorı: { type: [String] },
    webDurum: { type: String },
    image: { type: [String] },
    shortDescription: { type: String },
    fullDescription: { type: String }

});

module.exports = mongoose.model('Products', productSchema);