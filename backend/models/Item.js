import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
        },

}
)

const Item = mongoose.model("Item", ItemSchema);
export default Item;