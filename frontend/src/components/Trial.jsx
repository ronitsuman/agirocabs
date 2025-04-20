import React from "react";
import { useSelector } from "react-redux";

const Cars = () => {
  const bookingDetails = useSelector((state) => state.booking.bookingDetails || {});

  console.log("Booking Details in Cars Component:", bookingDetails);

  return (
    <div>
      <h1>Available Cars</h1>
      {bookingDetails.pickupLocation ? (
        <>
          <p>Pickup: {bookingDetails.pickupLocation}</p>
          <p>Dropoff: {bookingDetails.dropoffLocation}</p>
          <p>Pickup Date: {bookingDetails.pickupDateTime}</p>
          <p>Return Date: {bookingDetails.returnDateTime}</p>
        </>
      ) : (
        <p>No booking details available.</p>
      )}
    </div>
  );
};

export default Cars;