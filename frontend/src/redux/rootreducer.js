import { combineReducers } from "redux";
import bookingReducer from "./bookingreducer";
import carReducer from "./CarReducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
  car: carReducer,
});

export default rootReducer;