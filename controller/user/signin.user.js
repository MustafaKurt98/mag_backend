const UserModel = require('../../models/user/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const signIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Tüm alanları giriniz' });
    } else {
        UserModel.findOne({ email }, async function (err, user) {
            if (err) {
                res.status(500).json({ msg: 'Hata oluştu' });
            } else {
                if (!user) {
                    res.status(400).json({ msg: 'Böyle bir hesap yok' });
                } else {
                    const result = await bcrypt.compare(password, user.password);
                    if (result) {
                        const payload = { email, date: new Date() };
                        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
                        res.status(200).json({
                            message: 'Hoşgeldin ' + user.nameSurname + '!',
                            email: user.email,
                            token: token,
                            userID: user._id,
                            nameSurname: user.nameSurname,
                            phoneNumber: user.phoneNumber
                        });
                    } else {
                        res.status(400).json({ msg: 'Hatalı şifre' });
                    }
                }
            }

        })
    }
};

module.exports = { signIn };