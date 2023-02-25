import Todo from "../models/Todo.js";

/* READ */
export const getTodo = async (req, res) => {
    try {
        const todo = await Todo.find();
        res.send(todo);
    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

/* CREATE */

export const saveTodo = async (req, res) => {
    try{
        const { text } = req.body
        Todo.create({text}).then((data) => {
            console.log("Added successfully...");
            console.log(data);
            res.send(data);
        })

    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

export const updateTodo = async (req, res) => {
    try{
        const { _id, text } = req.body
        Todo.findByIdAndUpdate({_id}, {text})
        .then((data) => {
            console.log("Updated successfully...");
            console.log(data);
            res.send(data);
        })

    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

export const deleteTodo = async (req, res) => {
    try{
        const { _id, text } = req.body
        Todo.findByIdAndDelete({_id})
        .then((data) => {
            console.log("Deleted successfully...");
            console.log(data);
            res.send(data);
        })

    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

export const clearTodo = async (req, res) => {
    try{
        Todo.deleteMany({}).then((data) => {
            console.log("Removed all data...");
            console.log(data);
            res.send(data);
        })

    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}