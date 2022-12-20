require('dotenv').config()
const mongoose = require('mongoose')
const { MONGO_URL } = process.env
const db = async () => {
    try {
        mongoose.set("strictQuery", false);
        const db = await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed');
    }
}
module.exports = db