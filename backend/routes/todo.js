import express from "express";
import { clearTodo, deleteTodo, getTodo, saveTodo, updateTodo } from "../controllers/todo.js";

const router = express.Router();

/* CRUD Routes */
router.get('/', getTodo);

router.post('/save', saveTodo);

router.post('/update', updateTodo);

router.delete('/delete', deleteTodo);
router.delete('/deleteAll', clearTodo);

export default router;