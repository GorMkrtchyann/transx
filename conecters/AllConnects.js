const mongoose = require("mongoose");
require("dotenv").config();

const adminDB = mongoose.createConnection(process.env.MONGODB_ADMIN)
const pagesDB = mongoose.createConnection(process.env.MONGODB_PAGES)

module.exports = {
    adminDB,
    pagesDB,
}