const CartModel = require('../../models/cart/cart.model');

const placeOrder = async (req, res) => {
    const { email, cartList } = req.body;
    if (!email) {
        return res.status(400).json({ msg: 'Email yok' });
    }else if(!cartList){
        return res.status(400).json({ msg: 'Sepet yok' });
    } else {
        let result = await CartModel.create({
            email: email,
            products: cartList
        });
        if (result) {
            return res.status(200).json({ msg: 'Sipariş verildi', cartlist : result });
        } else {
            return res.status(400).json({ msg: 'Sipariş verilemedi' });
        }
    }

}
module.exports = { placeOrder };