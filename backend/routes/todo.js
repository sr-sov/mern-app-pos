import express from "express";
import { clearTodo, getTodo, saveTodo } from "../controllers/todo.js";

const router = express.Router();

/* CRUD Routes */
router.get('/', getTodo);

router.post('/save', saveTodo);

router.delete('/deleteAll', clearTodo);

export default router;