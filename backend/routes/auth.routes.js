import express from "express";
import {   forgotPasswordController, loginController, resetPasswordController, signupController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupController);
router.post('/login',loginController)
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);

export default router;
