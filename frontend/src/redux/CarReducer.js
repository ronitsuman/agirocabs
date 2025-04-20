// carReducer.js
import { SELECT_CAR, CLEAR_SELECTED_CAR, SET_FILTERED_TYPES } from './CarAction';

const initialState = {
  selectedCar: null,
  filteredTypes: [],
  allCars: []
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CAR:
      return {
        ...state,
        selectedCar: action.payload
      };
      
    case CLEAR_SELECTED_CAR:
      return {
        ...state,
        selectedCar: null
      };
      
    case SET_FILTERED_TYPES:
      return {
        ...state,
        filteredTypes: action.payload
      };
      
    // You might also want to add cases for fetching cars
    case 'FETCH_CARS_SUCCESS':
      return {
        ...state,
        allCars: action.payload,
        loading: false
      };
      
    case 'FETCH_CARS_START':
      return {
        ...state,
        loading: true
      };
      
    default:
      return state;
  }
};

export default carReducer;