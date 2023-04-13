const Cosplay = require('../models/cosplay.model');

module.exports = {
    meowTest: (request, response) => {
        response.json({
            message: "Take 2"
        });
    },
    createCosplay: (request, response) => {
        const {name} = request.body;
        Cosplay.create({
            name: name
        })
        .then(cosplay=>response.json(cosplay))
        .catch(err=> response.status(400).json(err))
    },
    getAll:(request, response) =>{
        Cosplay.find()
        .then(cosplays =>{
            console.log(cosplays);
            response.json(cosplays);
        })
        .catch(err=>{
            console.log(err)
            response.json(err)
        })
    },
    getOne: (request, response) => {
        Cosplay.findOne({_id: request.params.id})
        .then(cosplay => response.json(cosplay))
        .catch(err=> response.status(400).json(err))
    },
    updateCosplay: (request, response) => {
        Cosplay.findOneAndUpdate({_id: request.params.id}, request.body, { new: true })
        .then(updatedCosplay=> response.json(updatedCosplay))
        .catch(err=> response.json(err))
    },
    deleteCosplay: (request, response) => {
        Cosplay.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err=> response.json(err))
    }
}