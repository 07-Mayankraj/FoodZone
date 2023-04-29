require("dotenv").config();
const mongoose =  require("mongoose")

const dbconnection = mongoose.connect(process.env.mongoUrl)

module.exports = {dbconnection}