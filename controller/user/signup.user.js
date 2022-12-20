const UserModel = require('../../models/user/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SECRET_KEY } = process.env;

const signUp = async (req, res) => {
    const { email, password } = req.body;
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
            const newUser = new UserModel({
                email: email,
                password: hash
            });
            console.log(newUser);
            await newUser.save();
            const token = jwt.sign({ email: email }, SECRET_KEY);
            res.status(200).json({ message: 'User Created', token: token });

        }
    }
};

module.exports = { signUp };