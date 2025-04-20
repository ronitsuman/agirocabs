// import React, { useState, useEffect } from 'react';

// const BookingForm = ({ car, setBookingDetails, setFare }) => {
//   const [form, setForm] = useState({
//     pickup: '',
//     destination: '',
//     pickupDate: '',
//     pickupTime: '',
//     returnDate: '',
//     returnTime: '',
//     name: '',
//     email: '',
//     phone: '',
//     request: ''
//   });

//   // 👇 Set current date and time when form loads
//   useEffect(() => {
//     const now = new Date();
//     const currentDate = now.toISOString().split('T')[0]; // yyyy-mm-dd
//     const currentTime = now.toTimeString().slice(0, 5);  // hh:mm
//     setForm((prev) => ({
//       ...prev,
//       pickupDate: currentDate,
//       pickupTime: currentTime
//     }));
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleCalculateFare = () => {
//     const start = new Date(`${form.pickupDate}T${form.pickupTime}`);
//     const end = new Date(`${form.returnDate}T${form.returnTime}`);
//     const duration = (end - start) / (1000 * 60 * 60); // in hours
//     if (duration > 0) {
//       setFare(Math.ceil(duration) * car.rate);
//     } else {
//       setFare(0);
//     }
//     setBookingDetails(form);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       <input name="pickup" placeholder="Pick Up Location" className="input" onChange={handleChange} />
//       <input name="destination" placeholder="Destination" className="input" onChange={handleChange} />

//       <input
//         type="date"
//         name="pickupDate"
//         className="input"
//         value={form.pickupDate}
//         onChange={handleChange}
//       />
//       <input
//         type="time"
//         name="pickupTime"
//         className="input"
//         value={form.pickupTime}
//         onChange={handleChange}
//       />

//       <input type="date" name="returnDate" className="input" onChange={handleChange} />
//       <input type="time" name="returnTime" className="input" onChange={handleChange} />

//       <input name="name" placeholder="Your Name" className="input" onChange={handleChange} />
//       <input name="email" placeholder="Your Email" className="input" onChange={handleChange} />

//       <input name="phone" placeholder="Your Phone" className="input" onChange={handleChange} />
//       <textarea name="request" placeholder="Any special request?" className="input col-span-2" rows="2" onChange={handleChange} />

//       <button onClick={handleCalculateFare} className="col-span-2 bg-[#E94E3A] text-white py-2 px-4 rounded hover:bg-green-600 transition">Submit</button>
//     </div>
//   );
// };

// export default BookingForm;


import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBookingDetails } from "../redux/bookingaction";

const BookingForm = ({ car }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    pickupLocation: "", // Matches bookingReducer structure
    dropoffLocation: "",
    pickupDateTime: "",
    returnDateTime: "",
    name: "",
    email: "",
    phone: "",
    request: "",
  });

  // Set current date and time when form loads
  useEffect(() => {
    const now = new Date();
    const currentDateTime = now.toISOString().slice(0, 16); // yyyy-mm-ddThh:mm
    setForm((prev) => ({
      ...prev,
      pickupDateTime: currentDateTime,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBookingDetails(form)); // Dispatch to Redux
    console.log("Booking Details Dispatched:", form); // For debugging
    // Optionally calculate fare here if needed, but let Booking page handle it
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        name="pickupLocation"
        placeholder="Pick Up Location"
        className="input"
        value={form.pickupLocation}
        onChange={handleChange}
      />
      <input
        name="dropoffLocation"
        placeholder="Destination"
        className="input"
        value={form.dropoffLocation}
        onChange={handleChange}
      />

      <input
        type="datetime-local"
        name="pickupDateTime"
        className="input"
        value={form.pickupDateTime}
        onChange={handleChange}
        min={new Date().toISOString().slice(0, 16)} // Prevent past dates
      />
      <input
        type="datetime-local"
        name="returnDateTime"
        className="input"
        value={form.returnDateTime}
        onChange={handleChange}
        min={form.pickupDateTime || new Date().toISOString().slice(0, 16)} // Ensure return is after pickup
      />

      <input
        name="name"
        placeholder="Your Name"
        className="input"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Your Email"
        className="input"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Your Phone"
        className="input"
        value={form.phone}
        onChange={handleChange}
      />
      <textarea
        name="request"
        placeholder="Any special request?"
        className="input col-span-2"
        rows="2"
        value={form.request}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="col-span-2 bg-[#E94E3A] text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
