import express from "express";
import dotenv from "dotenv";
import notesRouter from "./route/notes.route.js";
import authRouter from "./route/user.route.js";
import { connectDb } from "./utils/connectdb.js";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/notes", notesRouter);
app.use("/api/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDb().then(() =>
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
  })
);
