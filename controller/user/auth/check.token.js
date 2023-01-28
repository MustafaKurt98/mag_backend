const UserModel = require('../../../models/user/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const checkToken = async (req, res, next) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ msg: 'Token yok' });
    } else {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(400).json({ msg: 'Token geçersiz' });
            } else {
                UserModel.findOne({ email: decoded.email }, (err, user) => {
                    if (err) {
                        return res.status(500).json({ msg: 'Hata oluştu' });
                    } else {
                        if (!user) {
                            return res.status(400).json({ msg: 'Böyle bir kullanıcı yok' });
                        } else {
                            req.user = user;
                            res.status(200).json(
                                user);
                            next();
                        }
                    }
                })
            }
        })
    }
};

module.exports = { checkToken };