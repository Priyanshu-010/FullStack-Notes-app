import { json } from "express"
import Note from "../model/Note.model.js"

export const getNotes = async(req, res) =>{
  try {
    const notes = await Note.find()
    res.status(200).send(notes)
  } catch (error) {
    console.log("Error in getNotes controller", error)
    res.status(500).send(error)
  }
}
export const createNote = async(req, res) =>{
  try {
    const {title, content} =req.body;
    const note = new Note({title, content});
    const savedNote = await note.save();
    res.status(201).send(savedNote)
  } catch (error) {
    console.log("Error in getNotes controller", error)
    res.status(500).send(error)
  }
}
export const updateNote = async(req, res) =>{
  try {
    const {id} = req.params;
    const {title, content} =req.body;
    const note = await Note.findById(id);
    if(!note){
      res.status(404).send("Note not found")
    }
    const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new: true});
    res.status(200).send(updatedNote)
  } catch (error) {
    console.log("Error in getNotes controller", error)
    res.status(500).send(error)
  }
}
export const deleteNote = async(req, res) =>{
  try {
    const {id} = req.params;
    const note = await Note.findById(id);
    if(!note){
      res.status(404).send("Note not found")
    }
    const deletedNote = await Note.findByIdAndDelete(id);
    res.status(200).send({message: "Note deleted"})
  } catch (error) {
    console.log("Error in getNotes controller", error)
    res.status(500).send(error)
  }
}