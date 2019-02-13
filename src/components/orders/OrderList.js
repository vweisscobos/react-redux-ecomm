import React from 'react';
import PropTypes from 'prop-types';
import OrderListRow from "./OrderListRow";

const OrderList = ({ orders }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>nº</th>
          <th>Produtos</th>
          <th>Cliente</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {
        orders.map(order => {
          return <OrderListRow key={order.id} {...order}/>
        })
      }
      </tbody>
    </table>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderList;