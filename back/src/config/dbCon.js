const mongoose = require('mongoose');

const dbCon = async  () => {
    // connect db
    await mongoose.connect('mongodb+srv://axelbriandiprg:9FGVJsPcZdHoNDpC@cinemax-cluster1.jxfhp.mongodb.net/')
}

module.exports = dbCon;