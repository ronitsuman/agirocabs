// bookingaction.js
export const setBookingDetails = (bookingDetails) => ({
  type: 'SET_BOOKING_DETAILS',
  payload: bookingDetails,
});

export const clearBookingDetails = () => ({
  type: 'CLEAR_BOOKING_DETAILS',
});