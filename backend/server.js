import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"
import adminRoutes from "./routes/admin.routes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import rideRoutes from "./routes/ride.routes.js";
import adminRideRoutes from "./routes/admin.ride.routes.js";
import { limiter } from "./middleware/rateLimmiter.js";
import { sanitize } from "./middleware/sanitize.js";
import helmet from "helmet"



dotenv.config(); 

const app = express();


app.get("/", (req, res) => {
  res.send("Self-Driving Cab Backend is Running with ES Modules & IIFE!");
});


(async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(" Server Start Error:", error);
    process.exit(1);
  }
})();

//midlleware 
app.use(express.json());
app.use(cors());
app.use(errorHandler)

//rate limit per ip is 100 
app.use(limiter)

//santization of input 
app.use(sanitize)

//headers secure 
app.use(helmet())

// //cors for limit sharing resource limit to the domain 
// const allowedOrigins = ["http://localhost:3000", "https://yourdomain.com"];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// }));


//api routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ride", rideRoutes);
app.use("/api/admin/rides", adminRideRoutes);