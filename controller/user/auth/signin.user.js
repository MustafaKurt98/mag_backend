const UserModel = require('../../../models/user/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
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
                        const token = jwt.sign(payload, SECRET_KEY);
                        res.status(200).json({
                            message: 'Hoşgeldin ' + user.nameSurname + '!',
                            email: user.email,
                            userID: user._id,
                            token: token,
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

const forgotPassword = async (req,res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ msg: 'Email giriniz' });
    } else {
        const transporter = nodemailer.createTransport({
            host: 'ms4.guzel.net.tr',
            port: 465,
            secure: true,
            auth: {
              user: 'destek@gokcekmakina.com',
              pass: 'G5ew3Yk3kf'
            }
          });
          const email = req.body.email; // kullanıcının e-posta adresi
          const code = Math.floor(100000 + Math.random() * 900000); // rastgele altı basamaklı bir onay kodu oluşturur
          const mailOptions = {
            from: 'destek@gokcekmakina.com',
            to: email,
            subject: 'Şifre sıfırlama kodunuz',
            text: `Şifre sıfırlama kodunuz: ${code}`
          };
          
          transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log(error);
            } else {
              return res.status(200).json({ msg: 'Mail gönderildi', code: code ,});
            }
          });
    }
}

module.exports = { signIn, forgotPassword };