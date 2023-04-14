const Item = require("../models/item.model");

module.exports = {
    getItems: (req, res) => {
        console.log('get items')
        Item.find()
            .then(item => {
                res.status(200).json(item);
                console.log(itme);
            })
            .catch(err => {
                console.log(err)
                response.json(err)
            })
    },
    createItem: (req, res) => {
        const item = new Item(req.body);
        Item.save()
        .then(res.status(201).json(item))
        .catch(error=>{console.log(error)})
        // try {
        //     await item.save();
        //     res.status(201).json(item);
        // } catch (error) {
        // }
    }

}

// export const getItems = async (req, res) => {
//     console.log('get items')
//     try {
//         const item = await Item.find()
//         res.status(200).json(item);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
// export const createItem = async (req, res) => {
//     const item = new Item(req.body);
//     try {
//         await item.save();
//         res.status(201).json(item);
//     } catch (error) {
//     }
// }