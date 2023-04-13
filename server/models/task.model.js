const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        minLength: 1,
        require:[true, "Name is Required"]
    },
    parentId: {
        type: String
    },
    parentName:{
        type:String
    },
    cosplayId: {
        type: String
    },
    cosplayName:{
        type:String
    }
    //, userID {}
}, {timestamps:true});
module.exports = mongoose.model('Task', TaskSchema);