const ProductModel = require('../../models/product/product-model');
const fs = require('fs');

const productCreate = async (req, res) => {
    fs.readFile('./json/products.json', 'utf-8', async (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error reading file' });
        } else {
            const productsData = await JSON.parse(data);
            ProductModel.insertMany(productsData).then(function () {
                console.log("Data inserted")  // Success
                res.status(200).json(productsData);
            }).catch(function (error) {
                console.log(error)      // Failure
                res.status(500).json({ message: 'Error inserting data' });
            }
            );
        }
    })
}

module.exports = { productCreate };