const GuestModel = require('../../models/guest/guest.model');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const guestLogin = async (req, res) => {
    const { deviceID } = req.body;
    if (!deviceID) {
        return res.status(400).json({ message: 'Device ID Required' });
    }
    else {
        let resultAccount = await GuestModel.findOne({ deviceID: deviceID });
        if (resultAccount) {
            const token = jwt.sign({ deviceID: deviceID }, SECRET_KEY);
            res.status(200).json({
                message: 'Welcome Guest!',
                token: token,
                deviceID: deviceID,
                guestID: resultAccount._id
            });
        } else {
            const newGuest = new GuestModel({
                deviceID: deviceID,

            });
            await newGuest.save();
            const token = jwt.sign({ deviceID: deviceID }, SECRET_KEY);
            res.status(200).json({
                message: 'Welcome Guest!',
                token: token,
                deviceID: deviceID,
                guestID: newGuest._id
            });
        }
    }
};

module.exports = { guestLogin };