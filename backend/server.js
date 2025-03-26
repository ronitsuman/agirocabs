import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"


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




//api routes
app.use("/api/auth", authRoutes);
