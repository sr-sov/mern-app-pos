import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        text: {
            type: String,
        },
        /* completed: {
            type: Boolean,
            required: false,
        }, */
}
)

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;