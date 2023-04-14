const ItemController = require('../controllers/item.controller');
const express = require('express');
const router = express.Router();
// router.get('/',getItems);
// router.post('/',createItem);
// export default router;

module.exports= (router) =>{
    router.get('/items',getItems);
    router.post('/items',createItem);
}