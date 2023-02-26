import express from "express";
import { clearItem, deleteItem, getItem, saveItem, updateItem } from "../controllers/item.js";

const router = express.Router();

/* CRUD Routes */
router.get('/', getItem);

router.post('/save', saveItem);

router.post('/update', updateItem);

router.delete('/delete', deleteItem);
router.delete('/deleteAll', clearItem);

export default router;