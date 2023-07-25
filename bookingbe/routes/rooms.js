import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
// Create
router.post("/:hotelid", verifyAdmin, createRoom);
// update
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

// Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// Get a
router.get("/:id", getRoom);

// Get All
router.get("/", getAllRooms);
export default router;
