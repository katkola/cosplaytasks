const Picto = require('../models/picto.model');

module.exports = {
    createPicto: (request, response) => {
        const {title, image} = request.body;
        Picto.create({
            title:title,
            image: image
        })
        .then(picto=>response.json(picto))
        .catch(err=> response.status(400).json(err))
    },
    getAll:(request, response) =>{
        Picto.find()
        .then(pictos =>{
            console.log(pictos);
            response.json(pictos);
        })
        .catch(err=>{
            console.log(err)
            response.json(err)
        })
    },
    getOne: (request, response) => {
        Picto.findOne({_id: request.params.id})
        .then(picto => response.json(picto))
        .catch(err=> response.status(400).json(err))
    },
    updatePicto: (request, response) => {
        Picto.findOneAndUpdate({_id: request.params.id}, request.body, { new: true })
        .then(updatedPicto=> response.json(updatedPicto))
        .catch(err=> response.json(err))
    },
    deletePicto: (request, response) => {
        Picto.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err=> response.json(err))
    }
}