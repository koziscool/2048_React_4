
import { createStore } from 'redux';
import myReducer from './reducers/myReducer';
const store = createStore(myReducer);
export default store;

