const express = require('express');
const router = express.Router();

const placeOrder = require('../../controller/cart/place.order');
const getOrder = require('../../controller/cart/get.order');


router.post('/placeorder', placeOrder.placeOrder);
router.post('/getorder', getOrder.getOrder);

module.exports = router;