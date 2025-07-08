import { json } from "express";
import Note from "../model/Note.model.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).send(notes);
  } catch (error) {
    console.log("Error in getNotes controller", error);
    res.status(500).send(error);
  }
};
export const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findById({ _id: req.params.id, user: req.user.id });
    res.status(200).send(note);
  } catch (error) {
    console.log("Error in getNotes controller", error);
    res.status(500).send(error);
  }
};
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content, user: req.user.id });
    console.log("user: ", req.user);
    const savedNote = await note.save();
    res.status(201).send(savedNote);
  } catch (error) {
    console.log("Error in getNotes controller", error);
    res.status(500).send(error);
  }
};
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await Note.findById(id);
    if (!note) {
      res.status(404).send("Note not found");
    }
    const updatedNote = await Note.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { title, content },
      { new: true }
    );
    res.status(200).send(updatedNote);
  } catch (error) {
    console.log("Error in getNotes controller", error);
    res.status(500).send(error);
  }
};
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      res.status(404).send("Note not found");
    }
    const deletedNote = await Note.findByIdAndDelete({
      _id: id,
      user: req.user.id,
    });
    res.status(200).send({ message: "Note deleted" });
  } catch (error) {
    console.log("Error in getNotes controller", error);
    res.status(500).send(error);
  }
};
