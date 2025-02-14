const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject:String,
    message:String
});

const User = mongoose.model("User",userSchema)
module.exports =User;