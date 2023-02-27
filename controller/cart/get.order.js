const CartModel = require('../../models/cart/cart.model');

const getOrder = async (req, res) => {
    const { email } = req.body;
    console.log(email);
    if (!email) {
        return res.status(400).json({ msg: 'Email yok' });
    } else {
        const order = await CartModel.find({ email: email });
        if (order) {
            return res.status(200).json({ msg: 'Siparişler', orderlist: order });
        }
        else {
            return res.status(400).json({ msg: 'Sipariş yok' });
        }
    } }

module.exports = { getOrder };
