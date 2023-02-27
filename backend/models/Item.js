import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        description: {
            type: String,
        }

}
)

const Item = mongoose.model("Item", ItemSchema);
export default Item;