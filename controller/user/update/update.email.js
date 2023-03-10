const UserModel = require('../../../models/user/user.model');

const updateEmail = async (req, res) => {
    const { token, email } = req.body;
    if (!token) {
        return res.status(400).json({ msg: 'Token yok' });
    } else {
        let resultAccount = await UserModel.findOne({ token: token });
        if (!resultAccount) {
            return res.status(400).json({ msg: 'Böyle bir hesap yok' });
        } else {
            let result = await UserModel.updateOne({
                token: token
            }, { $set: { email: email } });
            console.log('result ' + result);
            if (result) {
                return res.status(200).json({ msg: 'Email güncellendi' });
            } else {
                return res.status(400).json({ msg: 'Email güncellenemedi' });
            }
        }

    };
}
module.exports = { updateEmail };