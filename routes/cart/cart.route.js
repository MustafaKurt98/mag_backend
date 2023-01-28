const express = require('express');
const router = express.Router();

const placeOrder = require('../../controller/cart/place.order');


router.post('/placeorder', placeOrder.placeOrder);

module.exports = router;