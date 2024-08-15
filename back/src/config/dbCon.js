const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const dbCon = async  () => {
    // connect db
    await mongoose.connect(process.env.MONGO_URI)
}

module.exports = dbCon;