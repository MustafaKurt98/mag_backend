const ProductModel = require('../../models/product/product-model');

const productRead = async (req, res) => {
    const productsData = await ProductModel.find();
    res.status(200).json(productsData);
}

module.exports = { productRead };