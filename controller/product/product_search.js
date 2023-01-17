const ProductModel = require('../../models/product/product-model');
const MagProductModel = require('../../models/product/mag.products.model');

const searchProductAPI = async (req, res) => {
    const { search } = req.query;
    console.log(search);
    try {
        console.log('içeri girdi');
        const result = await MagProductModel.where('code').regex(search).exec();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


const searchProductAPI2 = async (req, res) => {
    const { search } = req.query;
    console.log(search);
    try {
        console.log('içeri girdi');
        const result = await ProductModel.where('name').regex(search).exec();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = { searchProductAPI, searchProductAPI2 };