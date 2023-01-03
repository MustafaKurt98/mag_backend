const express = require('express');
const router = express.Router();
const productCreate = require('../../controller/product/product_create');
const productRead = require('../../controller/product/product_read');

router.post('/create', productCreate.productCreate);

router.post('/read', productRead.paginationProductAPI);

module.exports = router;