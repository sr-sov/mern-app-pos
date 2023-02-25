import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import todoRoute from "./routes/todo.js";

dotenv.config();

const app = express();

/* MONGOOSE SETUP */
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect`)) 

app.use(express.json())
app.use(todoRoute);