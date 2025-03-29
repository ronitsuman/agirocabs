import Ride from "../models/ride.model.js";
import User from "../models/user.js";

//  Ride Book API
export const bookRide = async (req, res) => {
  try {
    const { pickupLocation, destination, fare, paymentMethod } = req.body;

    // User ID from Token Middleware
    const userId = req.user._id;

    if (!pickupLocation || !destination || !fare || !paymentMethod) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const ride = new Ride({
      user: userId,
      pickupLocation,
      destination,
      fare,
      paymentMethod,
      status: "pending",
      paymentStatus: paymentMethod === "cash" ? "pending" : "pending", // Online me Payment Integration hoga
    });

    await ride.save();
    res.status(201).json({ message: "Ride booked successfully", ride });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//  User Apni Ride History Dekh Sake
export const getUserRideHistory = async (req, res) => {
    try {
      const userId = req.user._id; // Logged-in user ka ID
      const rides = await Ride.find({ user: userId }).sort({ createdAt: -1 });
  
      res.status(200).json({ success: true, rides });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };



//  Get All Rides (Admin Only)
export const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find().populate("user", "name email phone").sort({createdAt:-1});
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: "Error fetching rides", error: error.message });
  }
};

//  Accept Ride (Admin Only)
export const acceptRide = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.rideId);
    if (!ride) return res.status(404).json({ message: "Ride not found!" });

    ride.status = "accepted";
    await ride.save();
    res.status(200).json({ message: "Ride accepted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error accepting ride", error: error.message });
  }
};

//  Cancel Ride (Admin Only)
export const cancelRide = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.rideId);
    if (!ride) return res.status(404).json({ message: "Ride not found!" });

    ride.status = "cancelled";
    await ride.save();
    res.status(200).json({ message: "Ride cancelled successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling ride", error: error.message });
  }
};
