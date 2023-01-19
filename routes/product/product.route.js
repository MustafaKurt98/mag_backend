const express = require('express');
const router = express.Router();
const productCreate = require('../../controller/product/product_create');
const productRead = require('../../controller/product/product_read');
const searchProduct = require('../../controller/product/product_search');

router.post('/create', productCreate.magProductCreate);

router.post('/read', productRead.MagpaginationProductAPI);

router.post('/readASP', productRead.paginationProductAPI);

router.post('/search', searchProduct.searchProductAPI);

router.post('/searchASP', searchProduct.searchProductAPI2);

module.exports = router;