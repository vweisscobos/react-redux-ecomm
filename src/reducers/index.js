import { combineReducers } from 'redux';
import orders from './orderReducer';
import products from './productReducer';
import clients from './clientsReducer';

const rootReducer = combineReducers({
  orders,
  products,
  clients
});

export default rootReducer;