import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signupController = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    //  Check if User Already Exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    //  Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Create New User
    const newUser = new User({ name, email, phone, password: hashedPassword });
    await newUser.save();

    //  Generate JWT Token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//login api
export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      //  Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      //  Compare password using model function
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }
  
      //  Generate JWT Token
      const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
  
      res.status(200).json({ message: "Login successful!", token });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
