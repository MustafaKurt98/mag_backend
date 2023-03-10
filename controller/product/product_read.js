const ProductModel = require('../../models/product/product-model');
const MagProductModel = require('../../models/product/mag.products.model');

const paginationProductAPI = async (req, res) => {
    const { page, limit } = req.query;
    console.log(page, limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    const count = await ProductModel.countDocuments().exec();
    if (endIndex < count) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }
    try {
        results.results = await ProductModel.find().limit(limit * 1).skip(startIndex).exec();
        res.status(200).json(results);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const MagpaginationProductAPI = async (req, res) => {
    const { page, limit } = req.query;
    console.log(page, limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    const count = await MagProductModel.countDocuments().exec();
    if (endIndex < count) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }
    try {
        results.results = await MagProductModel.find().limit(limit * 1).skip(startIndex).exec();
        res.status(200).json(results);
        
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const getAllMagProductsLength = async (req, res) => {
    try {
        const products = await MagProductModel.find();
        res.status(200).json(products.length);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = { paginationProductAPI, MagpaginationProductAPI, getAllMagProductsLength };