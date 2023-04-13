const CosplayController = require('../controllers/cosplay.controller');

module.exports = (app) => {
    app.get('/meow', CosplayController.meowTest); //test meow
    app.post('/cosplays', CosplayController.createCosplay); //create one
    app.get('/cosplays/:id', CosplayController.getOne); //read one 
    app.get('/cosplays', CosplayController.getAll); //read all
    app.put('/cosplays/:id', CosplayController.updateCosplay); //update one
    app.delete('/cosplays/:id', CosplayController.deleteCosplay); //destroy one
}