import * as types from './actionTypes';
import ClientsApi from '../api/mockClientsApi';

export function createClientSucess(client) {
  return { type: types.CREATE_CLIENT_SUCCESS, client }
}

export function loadClientsSuccess(clients) {
  return { type: types.LOAD_CLIENTS_SUCCESS, clients}
}

export function loadClients() {
  return function(dispatch) {
    return ClientsApi.getAllClients().then(clients => {
      dispatch(loadClientsSuccess(clients));
    }).catch(error => {
      throw(error);
    })
  }
}