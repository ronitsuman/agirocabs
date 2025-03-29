import express from "express";
import { acceptRide, cancelRide, getAllRides } from "../controllers/ride.controller.js";
import{ authMiddleware} from "../middleware/auth.js";
import{ adminMiddleware }from "../middleware/auth.js"; // Sirf admin access ke liye
 
const router = express.Router();

//  Admin Ride Management APIs
router.get("/rides", authMiddleware, adminMiddleware, getAllRides); // Ride list dekhne ke liye
router.post("/accept/:rideId", authMiddleware, adminMiddleware, acceptRide); // Ride Accept
router.post("/cancel/:rideId", authMiddleware, adminMiddleware, cancelRide); // Ride Cancel

export default router;
