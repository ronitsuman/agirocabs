import React, { useState } from 'react'
import Header from '../components/Header'
import CarInfo from '../components/CarInfo';
import BookingForm from '../components/BookingForm';
import FareSummary from '../components/FareSummary';
import StepsSection from '../components/StepsSection';
import MovingText from '../components/MovingText';
import Footer from '../components/Footer';

const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState({});
  const [fare, setFare] = useState(0);

  const car = {
    name: 'Maruti Swift',
    rate: 109,
    image: 'swift.png'
  };

  return (
    <>
      <Header text="Quick Booking" />

      <div className="flex items-center flex-col justify-center py-10 px-4 bg-black min-h-screen">
        <div className="w-full h-fit max-w-5xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 p-6 md:p-10">
          
          {/* Left Side - Car Info + Form */}
          <div>
            <CarInfo car={car} />
            <BookingForm car={car} setBookingDetails={setBookingDetails} setFare={setFare} />
          </div>

          {/* Right Side - Fare Summary */}
          <FareSummary car={car} bookingDetails={bookingDetails} fare={fare} />
        </div>
        <StepsSection/>
      </div>
      <MovingText bgColor='bg-green-500' textColor="text-black"/>
        <Footer/>

    </>
  )
}

export default Booking;
