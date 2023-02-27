import Item from "../models/Item.js";

/* READ */
export const getItem = async (req, res) => {
    try {
        const item = await Item.find();
        res.send(item);
    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

/* CREATE */

export const saveItem = async (req, res) => {
    try{
        const { itemName, price, stock, description } = req.body
        Item.create({itemName, price, description, stock}).then((data) => {
            console.log("Added successfully...");
            console.log(data);
            res.send(data);
        })

    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

/* UPDATE */
export const updateItem = async (req, res) => {
    try{
        const { _id, itemName, price, stock, description } = req.body
        Item.findByIdAndUpdate({_id}, {itemName, price, stock, description})
        .then((data) => {
            console.log("Updated successfully...");
            console.log(data);
            res.send(data);
        })

    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

/* DELETE */
export const deleteItem = async (req, res) => {
    try{
        const { _id } = req.body
        Item.findByIdAndDelete({_id})
        .then((data) => {
            console.log("Deleted successfully...");
            console.log(data);
            res.send(data);
        })

    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

export const clearItem = async (req, res) => {
    try{
        Item.deleteMany({}).then((data) => {
            console.log("Removed all data...");
            console.log(data);
            res.send(data);
        })

    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}