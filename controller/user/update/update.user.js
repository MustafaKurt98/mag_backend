const UserModel = require('../../../models/user/user.model');

const updateUser = async (req, res) => {
    const { token, nameSurname } = req.body;
    console.log('token' + token);
    console.log('nameSurname' + nameSurname);
    if (!token) {
        return res.status(400).json({ msg: 'Token yok' });
    } else {
        let resultAccount = await UserModel.findOne({ token: token });
        if (!resultAccount) {
            return res.status(400).json({ msg: 'Böyle bir hesap yok' });
        } else {
            let result = await UserModel.updateOne({
                token: token
            }, { $set: { nameSurname: nameSurname } });
            console.log('result ' + result);
            if (result) {
                return res.status(200).json({ msg: 'İsim güncellendi' });
            } else {
                return res.status(400).json({ msg: 'İsim güncellenemedi' });
            }
        }

    };
}
module.exports = { updateUser };