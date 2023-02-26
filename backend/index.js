import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import cors from "cors";

import itemRoute from "./routes/item.js";

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


/* MONGOOSE SETUP */
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect`)) 


app.use(itemRoute);