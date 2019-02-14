import * as types from './actionTypes';
import ProductsApi from '../api/mockProductsApi';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function getProducts(term) {
  return function(dispatch, getState) {
    return ProductsApi.filterProducts(term).then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadProducts() {
  return function(dispatch, getState) {
    return ProductsApi.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products))
    }).catch(error => {
      throw(error);
    })
  }
}

