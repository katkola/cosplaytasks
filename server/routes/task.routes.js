const TaskController = require('../controllers/task.controller');

module.exports = (app) => {
    app.get('/meow', TaskController.meowTest); //test meow
    app.post('/tasks', TaskController.createTask); //create one
    app.get('/tasks/:id', TaskController.getOne); //read one 
    app.get('/tasks', TaskController.getAll); //read all
    app.get('/tasks/cosplay/:id', TaskController.getAllByCosplay); //read all
    app.put('/tasks/:id', TaskController.updateTask); //update one
    app.delete('/tasks/:id', TaskController.deleteTask); //destroy one
}