const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    nameSurname: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    },
    token: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);