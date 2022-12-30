const mongoose = require('mongoose');
const guestSchema = new mongoose.Schema({
    deviceID: {
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

module.exports = mongoose.model('Guest', guestSchema);