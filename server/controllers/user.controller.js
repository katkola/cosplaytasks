const User = require('../models/user.model');

module.exports = {
    meowTest: (request, response) => {
        response.json({
            message: "Take 2"
        });
    },
    createUser: (request, response) => {
        const {name} = request.body;
        User.create({
            username: username,
            password: password
        })
        .then(user=>response.json(user))
        .catch(err=> response.status(400).json(err))
    },
    // login: (req, res) =>{
    //     res.json({
    //         token: "Login Controller"
    //     });
    // },
    // register: (req, res) =>{
    //     res.json({
    //         token: "Registration Controller"
    //     });
    // },
    getAll:(request, response) =>{
        User.find()
        .then(users =>{
            console.log(users);
            response.json(users);
        })
        .catch(err=>{
            console.log(err)
            response.json(err)
        })
    },
    getOne: (request, response) => {
        User.findOne({_id: request.params.id})
        .then(user => response.json(user))
        .catch(err=> response.status(400).json(err))
    },
    updateUser: (request, response) => {
        User.findOneAndUpdate({_id: request.params.id}, request.body, { new: true })
        .then(updatedUser=> response.json(updatedUser))
        .catch(err=> response.json(err))
    },
    deleteUser: (request, response) => {
        User.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err=> response.json(err))
    }
}