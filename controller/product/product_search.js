const ProductModel = require('../../models/product/product-model');

const searchProductAPI = async (req, res) => {
    const { search } = req.query;
    console.log(search);
    try {
        const result = await ProductModel.where('id').regex(search).exec();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = { searchProductAPI };