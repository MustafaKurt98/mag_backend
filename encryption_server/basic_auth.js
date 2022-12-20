const userService = require('../encryption_server/user_service');
module.exports = basicAuth;

async function basicAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Kimlik bilgisi gönderilmedi!' });
    }
    const credentials = authHeader.split(' ')[1];
    const [username, password] = Buffer.from(credentials, 'base64').toString('utf-8').split(':');
    console.log(password);
    const user = await userService.authenticate({ username, password });
    if (user) {
        req.user = user;
        next();
    } else {
        return res.status(401).json({ message: 'Geçersiz Kimlik Doğrulama Bilgileri' });
    }

}