const UserModel = require('../../../models/user/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SECRET_KEY } = process.env;

const signUp = async (req, res) => {
    const { email, password, nameSurname, phoneNumber, address } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and Password Required' });
    } else {
        let resultAccount = await UserModel.findOne({ email: email });
        if (resultAccount) {
            res.status(400).json({ message: 'Email Already Exists' });
        } else {
            const salt = bcrypt.genSaltSync(10);
            console.log(salt);
            const hash = bcrypt.hashSync(password, salt);
            console.log(hash);
            const token = jwt.sign({ email: email }, SECRET_KEY);
            const newUser = new UserModel({
                email: email,
                password: hash,
                nameSurname: nameSurname,
                phoneNumber: phoneNumber,
                address: address,
                token: token
            });
            console.log(newUser);
            await newUser.save();
            // const token = jwt.sign({ email: email }, SECRET_KEY);
            res.status(200).json({
                message: 'Welcome ' + nameSurname + '!',
                token: token,
                email: email,
                userID: newUser._id,
                nameSurname: nameSurname,
                phoneNumber: phoneNumber
            });

        }
    }
};

module.exports = { signUp };