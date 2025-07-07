import express from "express";
import {
  createNote,
  deleteNote,
  getNotes,
  getSingleNote,
  updateNote,
} from "../controller/notes.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getNotes);
router.get("/:id", authMiddleware, getSingleNote);
router.post("/", authMiddleware, createNote);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);

export default router;
