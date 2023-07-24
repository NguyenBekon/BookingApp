import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controller/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

// Get a
router.get("/:id", verifyUser, getUser);

// Get All
router.get("/", verifyAdmin, getAllUsers);
export default router;
