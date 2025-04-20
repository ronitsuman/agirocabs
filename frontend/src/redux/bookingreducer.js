//bookinreducer
const initialState = {
  bookingDetails: {
    pickupLocation: "",
    returnLocation: "",
    startTime: "",
    endTime: "",
  },
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKING_DETAILS":
      return {
        ...state,
        bookingDetails: action.payload,
      };
    case "CLEAR_BOOKING_DETAILS":
      return {
        ...state,
        bookingDetails: initialState.bookingDetails, // Reset to initial state
      };
    default:
      return state;
  }
};

export default bookingReducer;