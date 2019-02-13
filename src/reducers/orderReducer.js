import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function orderReducer(state = initialState.orders, action) {
  switch(action.type) {
    case types.LOAD_CLIENTS_SUCCESS:
      return action.orders;

    case types.UPDATE_ORDER_SUCCESS:
      const list = [
        ...state.filter(order => order.id !== action.order.id),
        Object.assign({}, action.order)
      ];

      return list.sort((a, b) => {
        return a.id - b.id;
      });

    default:
      return state;
  }
};