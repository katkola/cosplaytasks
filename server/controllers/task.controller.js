const Task = require('../models/task.model');

module.exports = {
    meowTest: (request, response) => {
        response.json({
            message: "Take 2"
        });
    },
    createTask: (request, response) => {
        const {name, parentId, parentName, cosplayId, cosplayName} = request.body;
        Task.create({
            name: name, 
            parentId: parentId,
            parentName: parentName,
            cosplayId: cosplayId, 
            cosplayName: cosplayName
        })
        .then(task=>response.json(task))
        .catch(err=> response.status(400).json(err))
    },
    getAll:(request, response) =>{
        Task.find()
        .then(tasks =>{
            console.log(tasks);
            response.json(tasks);
        })
        .catch(err=>{
            console.log(err)
            response.json(err)
        })
    },
    getAllByCosplay:(request, response) =>{
        Task.find({cosplayId:request.params.id})
        .then(tasks =>{
            console.log(tasks);
            response.json(tasks);
        })
        .catch(err=>{
            console.log(err)
            response.json(err)
        })
    },
    getOne: (request, response) => {
        Task.findOne({_id: request.params.id})
        .then(task => response.json(task))
        .catch(err=> response.status(400).json(err))
    },
    updateTask: (request, response) => {
        Task.findOneAndUpdate({_id: request.params.id}, request.body, { new: true })
        .then(updatedTask=> response.json(updatedTask))
        .catch(err=> response.json(err))
    },
    deleteTask: (request, response) => {
        Task.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err=> response.json(err))
    }
}