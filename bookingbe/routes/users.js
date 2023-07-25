import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// // Have bugs
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Your are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Your are logged in, you can delete your account");
// });
// router.get("/checkadm/:id", verifyAdmin, (req, res, next) => {
//   res.send("Welcome admin logged in, you can delete all accounts");
// });

// update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

// Get a
router.get("/:id", verifyUser, getUser);

// Get All
router.get("/", verifyAdmin, getAllUsers);
export default router;
