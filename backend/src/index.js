import express from "express"
import dotenv from "dotenv"
import notesRouter from './route/notes.route.js'
import { connectDb } from "./utils/connectdb.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/notes', notesRouter);

connectDb().then(() =>
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
}));