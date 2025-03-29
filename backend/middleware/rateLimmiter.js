import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts in 15 min 
  message: "Too many requests from this IP, please try again later.",
  headers: true,
});
