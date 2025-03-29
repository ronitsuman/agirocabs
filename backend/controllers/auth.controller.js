import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import CustomError from "../utils/customError.js"; // Import Custom Error
import { sendEmail } from "../services/nodemailer.js";
import { generateOTP } from "../utils/otpGenrator.js";
import { otpEmailTemplate } from "../utils/emailTemplates.js";

// **SIGNUP API (User & Admin Both)**
export const signupController = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return next(new CustomError("All fields are required!", 400));
    }

    // Check if User Already Exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new CustomError("User already exists!", 400));
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create New User
    const newUser = new User({ name, email, phone, password: hashedPassword });
    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error) {
    next(new CustomError("Server error!", 500));
  }
};

// **SINGLE LOGIN API FOR USER & ADMIN**
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new CustomError("Email and Password required!", 400));
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return next(new CustomError("User not found!", 404));
    }

    // Match Password using Model Method
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new CustomError("Invalid credentials!", 400));
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: user.role === "admin" ? "Admin login successful!" : "User login successful!",
      token,
      role: user.role,
    });
  } catch (error) {
    next(new CustomError("Server error!", 500));
  }
};

//forgot password 
export const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    //  OTP Generate & Save in DB
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    user.resetOTP = otp;
    user.resetOTPExpiry = otpExpiry;
    await user.save();

    //  Send OTP via Email
    
    
    const emailContent = otpEmailTemplate(otp);

await sendEmail(email, "Password Reset OTP", emailContent);

    res.status(200).json({ message: "OTP sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//  OTP Verify & Reset Password API
export const resetPasswordController = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.resetOTP !== otp) {
      return res.status(400).json({ message: "Invalid OTP!" });
    }

    //  Check OTP Expiry
    if (user.resetOTPExpiry < new Date()) {
      return res.status(400).json({ message: "OTP has expired!" });
    }

    //  Hash New Password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    //  Remove OTP After Successful Reset
    user.resetOTP = null;
    user.resetOTPExpiry = null;
    await user.save();

    res.status(200).json({ message: "Password reset successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}; 


let blacklistedTokens = new Set();

export const logoutController = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    blacklistedTokens.add(token);
  }
  res.status(200).json({ message: "Logged out successfully" });
};

