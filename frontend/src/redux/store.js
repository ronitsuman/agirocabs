//store
import { createStore } from 'redux';
import rootReducer from './rootreducer'; // Use the combined reducer file

const store = createStore(rootReducer);

export default store;