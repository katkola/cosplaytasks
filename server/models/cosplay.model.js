const mongoose = require('mongoose');

const CosplaySchema = new mongoose.Schema({
    name:{
        type: String,
        minLength: 1,
        require:[true, "Name is Required"]
    }
}, {timestamps:true});
module.exports = mongoose.model('Cosplay', CosplaySchema);