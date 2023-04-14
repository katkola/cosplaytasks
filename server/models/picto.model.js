const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PictoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'pictos'
})
module.exports = mongoose.model('Picto', PictoSchema)