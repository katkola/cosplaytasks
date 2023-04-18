const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/meow', UserController.meowTest); //test meow
    // app.get('/users/register', UserController.register); //create one
    app.post('/users', UserController.createUser); //create one
    app.get('/users/:id', UserController.getOne); //read one 
    // app.get('/users/login', UserController.login); //check login
    app.get('/users', UserController.getAll); //read all
    app.put('/users/:id', UserController.updateUser); //update one
    app.delete('/users/:id', UserController.deleteUser); //destroy one
}