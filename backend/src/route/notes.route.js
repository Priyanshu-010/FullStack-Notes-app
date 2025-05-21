import express from "express";
import { createNote, deleteNote, getNotes, getSingleNote, updateNote } from "../controller/notes.controller.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getSingleNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

