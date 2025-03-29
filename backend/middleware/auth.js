import jwt from "jsonwebtoken";
import User from "../models/user.js";

//  Authenticate Any Logged-in User (User + Admin)
// const authMiddleware = async (req, res, next) => {
//   try {
//     // Token Extract 
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized! No token provided." });
//     }

//     // Token Verify Karo
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.userId).select("-password");

//     if (!req.user) {
//       return res.status(401).json({ message: "User not found!" });
//     }

//     next(); //  Proceed if token is valid
//   } catch (error) {
//     res.status(401).json({ message: "Invalid or expired token!" });
//   }
// };
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const blacklistedTokens = new Set();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized! No token provided." });
    }

    // Check if token is blacklisted
    if (blacklistedTokens.has(token)) {
      return res.status(401).json({ message: "Token is blacklisted. Please login again." });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token!" });
  }
};




//  Admin-Specific Middleware
const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied! Admins only." });
  }
  next(); //  Proceed if user is admin
};

export { authMiddleware, adminMiddleware }; 

