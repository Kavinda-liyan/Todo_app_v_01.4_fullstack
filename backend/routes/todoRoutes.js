import express from "express";

import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoController.js";

const router = express.Router();

//get all todos
router.get("/", getTodos);

//get Single todo
router.get("/:id", getTodo);

//post new todo
router.post("/", createTodo);

//delete a todo
router.delete("/:id", deleteTodo);

//Update a todo
router.patch("/:id", updateTodo);

export default router;
