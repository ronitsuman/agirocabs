// carActions.js
export const SELECT_CAR = 'SELECT_CAR';
export const CLEAR_SELECTED_CAR = 'CLEAR_SELECTED_CAR';
export const SET_FILTERED_TYPES = 'SET_FILTERED_TYPES';

export const selectCar = (car) => ({
  type: SELECT_CAR,
  payload: car
});

export const clearSelectedCar = () => ({
  type: CLEAR_SELECTED_CAR
});

export const setFilteredTypes = (types) => ({
  type: SET_FILTERED_TYPES,
  payload: types
});