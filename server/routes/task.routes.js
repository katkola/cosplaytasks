const TaskController = require('../controllers/task.controller');

module.exports = (app) => {
    app.get('/meow', TaskController.meowTest); //test meow
    app.post('/api/tasks', TaskController.createTask); //create one
    app.get('/api/tasks/:id', TaskController.getOne); //read one 
    app.get('/api/tasks', TaskController.getAll); //read all
    app.get('/api/tasks/cosplay/:id', TaskController.getAllByCosplay); //read all
    app.put('/api/tasks/:id', TaskController.updateTask); //update one
    app.delete('/api/tasks/:id', TaskController.deleteTask); //destroy one
}