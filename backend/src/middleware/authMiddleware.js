import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = await User.findById(decoded.userId);
    next();
  } catch (error) {
    console.log(error, "error in auth middleware");
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;
