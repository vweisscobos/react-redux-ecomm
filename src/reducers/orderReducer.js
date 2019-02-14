import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function orderReducer(state = initialState.orders, action) {
  switch(action.type) {
    case types.LOAD_ORDERS_SUCCESS:
      return action.orders;

    case types.UPDATE_ORDER_SUCCESS:
      const list = [
        ...state.filter(order => order.id !== action.order.id),
        Object.assign({}, action.order)
      ];

      return list.sort((a, b) => {
        return a.id - b.id;
      });

    case types.CREATE_ORDER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.order)
      ];

    default:
      return state;
  }
};