import express from "express";
import {adminMiddleware, authMiddleware} from "../middleware/auth.js";
import { getAdminDashboard, getAllUsers, updateRideStatus } from "../controllers/admin.controller.js";

const router = express.Router();

// Admin Dashboard Route
router.get("/dashboard",authMiddleware, adminMiddleware, getAdminDashboard);

//  Get All Users Route
router.get("/users",authMiddleware, adminMiddleware, getAllUsers);
// Admin Ride Status Update Route
router.patch("/ride-status/:rideId", authMiddleware, adminMiddleware, updateRideStatus);


export default router;
