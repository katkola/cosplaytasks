const CosplayController = require('../controllers/cosplay.controller');

module.exports = (app) => {
    app.get('/meow', CosplayController.meowTest); //test meow
    app.post('/api/cosplays', CosplayController.createCosplay); //create one
    app.get('/api/cosplays/:id', CosplayController.getOne); //read one 
    app.get('/api/cosplays', CosplayController.getAll); //read all
    app.put('/api/cosplays/:id', CosplayController.updateCosplay); //update one
    app.delete('/api/cosplays/:id', CosplayController.deleteCosplay); //destroy one
}