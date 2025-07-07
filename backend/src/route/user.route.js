import express from "express"
import { register } from "module";
import { login } from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.post("/logout");

export default router;