import express from "express";
import { bookRide, getUserRideHistory } from "../controllers/ride.controller.js";
import {authMiddleware} from "../middleware/auth.js";

const router = express.Router();
 
// User Ride Booking
router.post("/book", authMiddleware, bookRide);
router.get("/history", authMiddleware, getUserRideHistory);

export default router;
