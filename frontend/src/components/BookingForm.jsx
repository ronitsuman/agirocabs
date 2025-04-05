import React, { useState, useEffect } from 'react';

const BookingForm = ({ car, setBookingDetails, setFare }) => {
  const [form, setForm] = useState({
    pickup: '',
    destination: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    name: '',
    email: '',
    phone: '',
    request: ''
  });

  // 👇 Set current date and time when form loads
  useEffect(() => {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0]; // yyyy-mm-dd
    const currentTime = now.toTimeString().slice(0, 5);  // hh:mm
    setForm((prev) => ({
      ...prev,
      pickupDate: currentDate,
      pickupTime: currentTime
    }));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalculateFare = () => {
    const start = new Date(`${form.pickupDate}T${form.pickupTime}`);
    const end = new Date(`${form.returnDate}T${form.returnTime}`);
    const duration = (end - start) / (1000 * 60 * 60); // in hours
    if (duration > 0) {
      setFare(Math.ceil(duration) * car.rate);
    } else {
      setFare(0);
    }
    setBookingDetails(form);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input name="pickup" placeholder="Pick Up Location" className="input" onChange={handleChange} />
      <input name="destination" placeholder="Destination" className="input" onChange={handleChange} />

      <input
        type="date"
        name="pickupDate"
        className="input"
        value={form.pickupDate}
        onChange={handleChange}
      />
      <input
        type="time"
        name="pickupTime"
        className="input"
        value={form.pickupTime}
        onChange={handleChange}
      />

      <input type="date" name="returnDate" className="input" onChange={handleChange} />
      <input type="time" name="returnTime" className="input" onChange={handleChange} />

      <input name="name" placeholder="Your Name" className="input" onChange={handleChange} />
      <input name="email" placeholder="Your Email" className="input" onChange={handleChange} />

      <input name="phone" placeholder="Your Phone" className="input" onChange={handleChange} />
      <textarea name="request" placeholder="Any special request?" className="input col-span-2" rows="2" onChange={handleChange} />

      <button onClick={handleCalculateFare} className="col-span-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">Submit</button>
    </div>
  );
};

export default BookingForm;
