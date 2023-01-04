const express = require('express');
const router = express.Router();
const productCreate = require('../../controller/product/product_create');
const productRead = require('../../controller/product/product_read');
const searchProduct = require('../../controller/product/product_search');

router.post('/create', productCreate.productCreate);

router.post('/read', productRead.paginationProductAPI);

router.post('/search', searchProduct.searchProductAPI);

module.exports = router;