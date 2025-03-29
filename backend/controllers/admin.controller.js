import User from "../models/user.js";
import Ride from '../models/ride.model.js'

//  Admin Dashboard
export const getAdminDashboard = (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard!", admin: req.user });
};
 
//  Get All Users (Admin Only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateRideStatus = async (req, res) => {
  try {
    const { rideId } = req.params;
    const { status } = req.body;

    // Allowed Status Updates
    const allowedStatus = ["Pending", "Confirmed", "Completed", "Cancelled"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status update!" });
    }

    // Ride Find & Update
    const ride = await Ride.findByIdAndUpdate(
      rideId,
      { status },
      { new: true }
    );

    if (!ride) {
      return res.status(404).json({ message: "Ride not found!" });
    }

    res.status(200).json({ message: "Ride status updated successfully!", ride });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//  Delete User
// export const deleteUser = async (req, res, next) => {
//     try {
//       if (req.user.role !== "admin") {
//         return next(new CustomError("Access Denied! Admins only.", 403));
//       }
//       const user = await User.findByIdAndDelete(req.params.id);
//       if (!user) {
//         return next(new CustomError("User not found!", 404));
//       }
//       res.status(200).json({ success: true, message: "User deleted successfully!" });
//     } catch (error) {
//       next(new CustomError("Failed to delete user!", 500));
//     }
//   };
  
//   //  Update User Role (Customer → Admin)
//   export const updateUserRole = async (req, res, next) => {
//     try {
//       if (req.user.role !== "admin") {
//         return next(new CustomError("Access Denied! Admins only.", 403));
//       }
//       const user = await User.findById(req.params.id);
//       if (!user) {
//         return next(new CustomError("User not found!", 404));
//       }
//       user.role = req.body.role || "customer";
//       await user.save();
//       res.status(200).json({ success: true, message: "User role updated!" });
//     } catch (error) {
//       next(new CustomError("Failed to update role!", 500));
//     }
//   };