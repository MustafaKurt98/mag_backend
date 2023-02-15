require('dotenv').config()

const { AUTH_NAME, AUTH_PASSWORD } = process.env
const users = [{ id: 1, username: AUTH_NAME, password: AUTH_PASSWORD }]
module.exports = { authenticate };

async function authenticate({ username, password }) {
console.log( AUTH_NAME, AUTH_PASSWORD);
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}