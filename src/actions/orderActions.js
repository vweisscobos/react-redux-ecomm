import * as types from './actionTypes';
import OrdersApi from '../api/mockOrdersApi';

export function loadOrdersSuccess(orders) {
  return { type: types.LOAD_ORDERS_SUCCESS, orders };
}

export function deleteOrderSuccess(id) {
  return { type: types.DELETE_ORDER_SUCCESS, id };
}

export function createOrderSuccess(order) {
  return { type: types.CREATE_ORDER_SUCCESS, order };
}

export function updateOrderSuccess(order) {
  return { type: types.UPDATE_ORDER_SUCCESS, order };
}

export function loadOrders() {
  return function(dispatch) {
    return OrdersApi.getAllOrders().then(orders => {
      dispatch(loadOrdersSuccess(orders))
    }).catch(error => {
      throw(error);
    });
  }
}

export function saveOrder(order) {
  return function(dispatch, getState) {
    return OrdersApi.saveOrder(order).then(savedOrder => {
      order.id ? dispatch(updateOrderSuccess(savedOrder)) :
        dispatch(createOrderSuccess(savedOrder));
    }).catch(error => {
      throw(error);
    });
  }
}