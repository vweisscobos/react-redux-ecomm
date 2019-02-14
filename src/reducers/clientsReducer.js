import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function clientReducer(state = initialState.clients, action) {
  switch(action.type) {
    case types.CREATE_CLIENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.client)
      ];

    case types.UPDATE_CLIENT_SUCCESS:
      return [
        ...state.filter(client => client.id !== action.client.id),
        Object.assign({}, action.client)
      ];

    case types.LOAD_CLIENTS_SUCCESS:
      return action.clients;

    default:
      return state;
  }
}