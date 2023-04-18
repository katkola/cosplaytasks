const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        minLength: 5,
        require:[true, "Username is Required"]
    },
    password:{
        type: String,
        minLength: 5,
        require:[true, "Password is Required"]
    }
}, {timestamps:true});
module.exports = mongoose.model('User', UserSchema);